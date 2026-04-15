import { useSearchParams } from "react-router-dom";
import { useGetLessonsQuery } from "StateManager/api/lessonsApi";

const LESSON_PARAM = "lesson";

const getErrorMessage = (error: unknown) =>
  typeof error === "object" &&
  error !== null &&
  "message" in error &&
  typeof error.message === "string"
    ? error.message
    : "Не удалось получить список уроков.";

export const useLessonNavigation = () => {
  const { data: lessons = [], error, isError, isLoading } = useGetLessonsQuery();
  const [searchParams, setSearchParams] = useSearchParams();

  const requestedSlug = searchParams.get(LESSON_PARAM);
  const activeLesson = lessons.find((lesson) => lesson.slug === requestedSlug) ?? lessons[0];

  const selectLesson = (slug: string) => {
    const nextParams = new URLSearchParams(searchParams);

    if (slug === lessons[0]?.slug) {
      nextParams.delete(LESSON_PARAM);
    } else {
      nextParams.set(LESSON_PARAM, slug);
    }

    setSearchParams(nextParams);
  };

  return {
    activeSlug: activeLesson?.slug ?? "",
    errorMessage: isError ? getErrorMessage(error) : "",
    isError,
    isLoading,
    lessons,
    selectLesson,
  };
};
