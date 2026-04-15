import { Card } from "@consta/uikit/Card";
import { Loader } from "@consta/uikit/Loader";
import { Text } from "@consta/uikit/Text";

import { MarkdownArticle } from "Components/ui/MarkdownArticle/MarkdownArticle";
import { useLessonContent } from "../model/useLessonContent";
import styles from "./LessonContent.module.sass";

export const LessonContent = () => {
  const { errorMessage, hasLessons, isError, isLoading, lesson } = useLessonContent();

  if (isLoading) {
    return (
      <Card className={styles.stateCard} border shadow form="round" verticalSpace="4xl">
        <Loader size="m" />
      </Card>
    );
  }

  if (!hasLessons) {
    return (
      <Card className={styles.stateCard} border form="round" shadow verticalSpace="4xl">
        <Text as="h2" size="xl" weight="bold">
          Уроки пока не найдены
        </Text>
        <Text className={styles.stateText} size="m" view="secondary">
          Добавьте `.md` файлы в публичную директорию `/lessons`, и они появятся в меню автоматически.
        </Text>
      </Card>
    );
  }

  if (isError || !lesson) {
    return (
      <Card className={styles.stateCard} border form="round" shadow status="alert" verticalSpace="4xl">
        <Text as="h2" size="xl" weight="bold">
          Не удалось открыть урок
        </Text>
        <Text className={styles.stateText} size="m" view="secondary">
          {errorMessage}
        </Text>
      </Card>
    );
  }

  return (
    <Card className={styles.card} border shadow form="round" verticalSpace="2xl" horizontalSpace="2xl">
      <MarkdownArticle content={lesson.content} />
    </Card>
  );
};
