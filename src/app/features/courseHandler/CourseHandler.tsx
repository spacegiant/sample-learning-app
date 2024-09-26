import { Data, DragDropZones, PageTypes } from "@/data/dataTypes";
import { DragAndDropPage } from "../dragAndDropPage/DragAndDropPage";

export function CourseHandler({
  data,
  currentCourseIndex = 0,
  currentPage = 0,
}: {
  data: Data;
  currentCourseIndex?: number;
  currentPage?: number;
}) {
  const currentCourse = data.courses[currentCourseIndex];
  const currentPageData = currentCourse.pages[currentPage];

  switch (currentPageData.pageType) {
    case PageTypes.DragDropZones:
      return <DragAndDropPage data={currentPageData as DragDropZones} />;
    case PageTypes.DragSlots:
      return <div>Drag Slots</div>;
    case PageTypes.HoverOver:
      return <div>Hover Over</div>;
    case PageTypes.SplashPage:
      return <div>Splash Page</div>;
    case PageTypes.SimpleInfo:
      return <div>Simple Info</div>;
    case PageTypes.SingleChoice:
      return <div>Single Choice</div>;
    case PageTypes.Timeline:
      return <div>Timeline</div>;
    case PageTypes.MultiChoice:
      return <div>Multi Choice</div>;
  }

  return <div>{currentPageData.title}</div>;
}
