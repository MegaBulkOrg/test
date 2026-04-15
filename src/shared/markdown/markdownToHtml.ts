const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const formatInline = (value: string) => {
  let result = escapeHtml(value);

  result = result.replace(
    /`([^`]+)`/g,
    (_match, code: string) => `<code>${escapeHtml(code)}</code>`,
  );
  result = result.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (_match, label: string, url: string) =>
      `<a href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${escapeHtml(label)}</a>`,
  );
  result = result.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  result = result.replace(/(^|[\s(])\*([^*]+)\*(?=[\s).,!?:;]|$)/g, "$1<em>$2</em>");
  result = result.replace(/(^|[\s(])_([^_]+)_(?=[\s).,!?:;]|$)/g, "$1<em>$2</em>");

  return result;
};

const parseTableRow = (row: string) =>
  row
    .trim()
    .replace(/^\||\|$/g, "")
    .split("|")
    .map((cell) => cell.trim());

const isHorizontalRule = (line: string) => /^-{3,}$/.test(line.trim());
const isFencedCode = (line: string) => line.trim().startsWith("```");
const isTableDivider = (line: string) =>
  /^\|?(\s*:?-{3,}:?\s*\|)+\s*:?-{3,}:?\s*\|?$/.test(line.trim());
const isUnorderedList = (line: string) => /^(\*|-)\s+/.test(line.trim());
const isOrderedList = (line: string) => /^\d+\.\s+/.test(line.trim());

const renderParagraph = (lines: string[]) => `<p>${formatInline(lines.join(" "))}</p>`;

export const markdownToHtml = (markdown: string) => {
  const lines = markdown.replaceAll("\r\n", "\n").split("\n");
  const html: string[] = [];

  for (let index = 0; index < lines.length; ) {
    const line = lines[index];
    const trimmedLine = line.trim();

    if (!trimmedLine) {
      index += 1;
      continue;
    }

    if (isFencedCode(trimmedLine)) {
      const meta = trimmedLine.slice(3).trim();
      const language = meta.split(/\s+/)[0];
      const codeLines: string[] = [];

      index += 1;

      while (index < lines.length && !isFencedCode(lines[index])) {
        codeLines.push(lines[index]);
        index += 1;
      }

      if (index < lines.length) {
        index += 1;
      }

      const languageClass = language ? ` class="language-${escapeHtml(language)}"` : "";

      html.push(`<pre><code${languageClass}>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
      continue;
    }

    const headingMatch = trimmedLine.match(/^(#{1,6})\s+(.+)$/);

    if (headingMatch) {
      const level = headingMatch[1].length;

      html.push(`<h${level}>${formatInline(headingMatch[2].trim())}</h${level}>`);
      index += 1;
      continue;
    }

    if (isHorizontalRule(trimmedLine)) {
      html.push("<hr />");
      index += 1;
      continue;
    }

    if (trimmedLine.startsWith(">")) {
      const quoteLines: string[] = [];

      while (index < lines.length && lines[index].trim().startsWith(">")) {
        quoteLines.push(lines[index].trim().replace(/^>\s?/, ""));
        index += 1;
      }

      html.push(`<blockquote>${quoteLines.map(formatInline).join("<br />")}</blockquote>`);
      continue;
    }

    if (trimmedLine.includes("|") && index + 1 < lines.length && isTableDivider(lines[index + 1])) {
      const header = parseTableRow(trimmedLine);
      const bodyRows: string[][] = [];

      index += 2;

      while (index < lines.length && lines[index].trim().includes("|")) {
        bodyRows.push(parseTableRow(lines[index]));
        index += 1;
      }

      const headHtml = header.map((cell) => `<th>${formatInline(cell)}</th>`).join("");
      const bodyHtml = bodyRows
        .map(
          (row) =>
            `<tr>${row.map((cell) => `<td>${formatInline(cell)}</td>`).join("")}</tr>`,
        )
        .join("");

      html.push(`<table><thead><tr>${headHtml}</tr></thead><tbody>${bodyHtml}</tbody></table>`);
      continue;
    }

    if (isUnorderedList(trimmedLine) || isOrderedList(trimmedLine)) {
      const isOrdered = isOrderedList(trimmedLine);
      const items: string[] = [];

      while (
        index < lines.length &&
        (isOrdered ? isOrderedList(lines[index].trim()) : isUnorderedList(lines[index].trim()))
      ) {
        items.push(lines[index].trim().replace(isOrdered ? /^\d+\.\s+/ : /^(\*|-)\s+/, ""));
        index += 1;
      }

      const tagName = isOrdered ? "ol" : "ul";
      const itemsHtml = items.map((item) => `<li>${formatInline(item)}</li>`).join("");

      html.push(`<${tagName}>${itemsHtml}</${tagName}>`);
      continue;
    }

    const paragraphLines: string[] = [];

    while (
      index < lines.length &&
      lines[index].trim() &&
      !isFencedCode(lines[index].trim()) &&
      !isHorizontalRule(lines[index].trim()) &&
      !lines[index].trim().startsWith(">") &&
      !lines[index].trim().match(/^(#{1,6})\s+/) &&
      !(lines[index].trim().includes("|") && index + 1 < lines.length && isTableDivider(lines[index + 1])) &&
      !isUnorderedList(lines[index].trim()) &&
      !isOrderedList(lines[index].trim())
    ) {
      paragraphLines.push(lines[index].trim());
      index += 1;
    }

    html.push(renderParagraph(paragraphLines));
  }

  return html.join("");
};
