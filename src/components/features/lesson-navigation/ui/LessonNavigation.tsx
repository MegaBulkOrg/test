import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Badge } from "@consta/uikit/Badge";
import { Button } from "@consta/uikit/Button";
import { Card } from "@consta/uikit/Card";
import { Loader } from "@consta/uikit/Loader";
import { Text } from "@consta/uikit/Text";
import { IconDocBlank } from "@consta/icons/IconDocBlank";
import { IconList } from "@consta/icons/IconList";

import { useLessonNavigation } from "../model/useLessonNavigation";
import styles from "./LessonNavigation.module.sass";

const MOBILE_BREAKPOINT = 768;

export const LessonNavigation = () => {
  const { activeSlug, errorMessage, isError, isLoading, lessons, selectLesson } =
    useLessonNavigation();
  const isMobile = useMediaQuery({ maxWidth: MOBILE_BREAKPOINT });
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const isOpen = isMobile ? isMobileOpen : true;

  return (
    <Card className={styles.card} border shadow form="round" verticalSpace="xl" horizontalSpace="xl">
      <div className={styles.header}>
        <div>
          <Text as="h1" size="2xl" weight="bold">
            Документация
          </Text>
          {/* <Text className={styles.caption} size="s" view="secondary">
            Список уроков формируется автоматически из директории `/lessons`.
          </Text> */}
        </div>
        <Badge label={`Уроков: ${lessons.length}`} status="system" view="tinted" />
      </div>

      {isMobile && (
        <Button
          className={styles.toggle}
          iconLeft={IconList}
          label={isOpen ? "Скрыть список" : "Показать список"}
          onClick={() => setIsMobileOpen((opened) => !opened)}
          size="m"
          type="button"
          view="secondary"
          width="full"
        />
      )}

      {isLoading && (
        <div className={styles.state}>
          <Loader size="m" />
        </div>
      )}

      {isError && !isLoading && (
        <div className={styles.state}>
          <Text size="s" view="alert">
            {errorMessage}
          </Text>
        </div>
      )}

      {!isLoading && !isError && isOpen && (
        <div className={styles.list}>
          {lessons.map((lesson) => {
            const isActive = lesson.slug === activeSlug;

            return (
              <button
                key={lesson.slug}
                className={isActive ? styles.itemActive : styles.item}
                onClick={() => selectLesson(lesson.slug)}
                type="button"
              >
                <IconDocBlank className={styles.itemIcon} size="s" />
                <span className={styles.itemText}>
                  <Text size="s" weight={isActive ? "bold" : "regular"}>
                    {lesson.title}
                  </Text>
                </span>
              </button>
            );
          })}
        </div>
      )}
    </Card>
  );
};
