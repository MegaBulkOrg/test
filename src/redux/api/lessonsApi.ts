import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

import lessonsManifest from "virtual:lessons-manifest";

export type LessonListItem = {
  fileName: string;
  order: number;
  slug: string;
  title: string;
  url: string;
};

export type LessonManifestItem = LessonListItem & {
  content: string;
};

export type LessonDocument = LessonManifestItem;

type LessonsApiError = {
  message: string;
  name: string;
};

const manifest = [...lessonsManifest] as LessonManifestItem[];

const createError = (message: string, name = "LessonsApiError"): LessonsApiError => ({
  message,
  name,
});

const findLesson = (slug: string) => manifest.find((lesson) => lesson.slug === slug);
const toLessonListItem = (item: LessonManifestItem): LessonListItem => {
  const { content, ...lesson } = item;

  void content;

  return lesson;
};

export const lessonsApi = createApi({
  reducerPath: "lessonsApi",
  baseQuery: fakeBaseQuery<LessonsApiError>(),
  endpoints: (builder) => ({
    getLessons: builder.query<LessonListItem[], void>({
      queryFn: async () => ({ data: manifest.map(toLessonListItem) }),
    }),
    getLessonContent: builder.query<LessonDocument, string>({
      async queryFn(slug) {
        const lesson = findLesson(slug);

        if (!lesson) {
          return { error: createError(`Урок со slug "${slug}" не найден.`, "NotFoundError") };
        }

        return {
          data: lesson,
        };
      },
    }),
  }),
});

export const { useGetLessonContentQuery, useGetLessonsQuery } = lessonsApi;
