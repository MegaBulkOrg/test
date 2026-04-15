import { useSearchParams } from "react-router-dom";
import { useGetLessonContentQuery, useGetLessonsQuery } from "StateManager/api/lessonsApi";

const LESSON_PARAM = "lesson";

const getErrorMessage = (error: unknown) =>
  typeof error === "object" &&
  error !== null &&
  "message" in error &&
  typeof error.message === "string"
    ? error.message
    : "Не удалось загрузить урок.";

export const useLessonContent = () => {
  const { data: lessons = [], error: lessonsError, isError: isLessonsError, isLoading: isLessonsLoading } =
    useGetLessonsQuery();
  const [searchParams] = useSearchParams();

  const requestedSlug = searchParams.get(LESSON_PARAM);
  const activeLesson = lessons.find((lesson) => lesson.slug === requestedSlug) ?? lessons[0];

  const lessonQuery = useGetLessonContentQuery(activeLesson?.slug ?? "", {
    skip: !activeLesson,
  });

  return {
    errorMessage: isLessonsError
      ? getErrorMessage(lessonsError)
      : lessonQuery.isError
        ? getErrorMessage(lessonQuery.error)
        : "",
    hasLessons: lessons.length > 0,
    isError: isLessonsError || lessonQuery.isError,
    isLoading: isLessonsLoading || lessonQuery.isLoading || lessonQuery.isFetching,
    lesson: lessonQuery.data,
  };
};
