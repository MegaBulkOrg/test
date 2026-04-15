import fs from "node:fs";
import path from "node:path";
import type { Plugin, ResolvedConfig, ViteDevServer } from "vite";
import { normalizePath } from "vite";

const MANIFEST_ID = "virtual:lessons-manifest";
const RESOLVED_MANIFEST_ID = "\0virtual:lessons-manifest";

type LessonManifestItem = {
  content: string;
  fileName: string;
  order: number;
  slug: string;
  title: string;
  url: string;
};

const getLessonsRoot = (config: ResolvedConfig) => {
  const publicDir = path.isAbsolute(config.publicDir)
    ? config.publicDir
    : path.resolve(config.root, config.publicDir);

  return path.resolve(publicDir, "lessons");
};

const getOrder = (fileName: string) => {
  const match = fileName.match(/^\((\d+)\)/);

  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
};

const getDisplayTitle = (fileName: string) =>
  fileName
    .replace(/\.md$/i, "")
    .replace(/^\(\d+\)\s*/, "")
    .trim();

const getSlug = (fileName: string) =>
  fileName
    .replace(/\.md$/i, "")
    .normalize("NFKD")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "");

const compareLessons = (left: LessonManifestItem, right: LessonManifestItem) => {
  if (left.order !== right.order) {
    return left.order - right.order;
  }

  return left.title.localeCompare(right.title, "ru");
};

const toUrl = (fileName: string) => {
  const encoded = fileName
    .split(path.sep)
    .map((segment) => encodeURIComponent(segment))
    .join("/");

  return `/lessons/${encoded}`;
};

const readLessons = (lessonsRoot: string): LessonManifestItem[] => {
  if (!fs.existsSync(lessonsRoot)) {
    return [];
  }

  return fs
    .readdirSync(lessonsRoot, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".md"))
    .map((entry) => ({
      content: fs.readFileSync(path.resolve(lessonsRoot, entry.name), "utf-8"),
      fileName: entry.name,
      order: getOrder(entry.name),
      slug: getSlug(entry.name),
      title: getDisplayTitle(entry.name),
      url: toUrl(entry.name),
    }))
    .sort(compareLessons);
};

const isLessonFile = (filePath: string, lessonsRoot: string) => {
  const normalizedFile = normalizePath(filePath);
  const normalizedRoot = normalizePath(lessonsRoot);

  return normalizedFile.startsWith(`${normalizedRoot}/`) && normalizedFile.endsWith(".md");
};

const invalidateManifest = (server: ViteDevServer) => {
  const module = server.moduleGraph.getModuleById(RESOLVED_MANIFEST_ID);

  if (module) {
    server.moduleGraph.invalidateModule(module);
  }
};

export const lessonsManifestPlugin = (): Plugin => {
  let config: ResolvedConfig;
  let lessonsRoot = "";

  return {
    name: "lessons-manifest",
    configResolved(resolvedConfig) {
      config = resolvedConfig;
      lessonsRoot = getLessonsRoot(config);
    },
    resolveId(source) {
      return source === MANIFEST_ID ? RESOLVED_MANIFEST_ID : null;
    },
    load(id) {
      if (id !== RESOLVED_MANIFEST_ID) {
        return null;
      }

      const lessons = readLessons(lessonsRoot);

      return `const lessons = ${JSON.stringify(lessons, null, 2)};
export default lessons;`;
    },
    configureServer(server) {
      if (fs.existsSync(lessonsRoot)) {
        server.watcher.add(lessonsRoot);
      }
    },
    handleHotUpdate(context) {
      if (!isLessonFile(context.file, lessonsRoot)) {
        return;
      }

      invalidateManifest(context.server);
      context.server.ws.send({ type: "full-reload" });
    },
  };
};
