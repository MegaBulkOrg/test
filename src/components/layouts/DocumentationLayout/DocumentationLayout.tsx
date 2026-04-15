import styles from "./DocumentationLayout.module.sass";

type DocumentationLayoutProps = {
  content: React.ReactNode;
  navigation: React.ReactNode;
};

export const DocumentationLayout = ({
  content,
  navigation,
}: DocumentationLayoutProps) => (
  <div className={styles.root}>
    <aside className={styles.navigation}>{navigation}</aside>
    <main className={styles.content}>{content}</main>
  </div>
);
