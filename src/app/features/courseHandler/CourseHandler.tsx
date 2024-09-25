import { Data, Page } from "@/data/dataTypes";

export function CourseHandler({ data }: { data: Data }) {
  const pages = data.courses[0].pages.map((page: Page, index: number) => {
    return <span key={index}>{page.title}</span>;
  });
  return <div>{pages}</div>;
}
