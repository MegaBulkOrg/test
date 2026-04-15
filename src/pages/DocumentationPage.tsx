import { DocumentationLayout } from "Components/layouts/DocumentationLayout/DocumentationLayout";
import { LessonContentWidget } from "Components/widgets/LessonContentWidget/LessonContentWidget";
import { LessonNavigationWidget } from "Components/widgets/LessonNavigationWidget/LessonNavigationWidget";

export const DocumentationPage = () => (
  <DocumentationLayout
    content={<LessonContentWidget />}
    navigation={<LessonNavigationWidget />}
  />
);
