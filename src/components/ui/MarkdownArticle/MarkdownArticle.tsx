import styles from "./MarkdownArticle.module.sass";
import { markdownToHtml } from "Shared/markdown/markdownToHtml";

type MarkdownArticleProps = {
  content: string;
};

export const MarkdownArticle = ({ content }: MarkdownArticleProps) => (
  <div
    className={styles.root}
    dangerouslySetInnerHTML={{ __html: markdownToHtml(content) }}
  />
);
