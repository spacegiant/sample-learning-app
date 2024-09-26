// import Image from "next/image";

import { Footer, Header, PageTitle } from "@/components";
import { data } from "@/data/data";
import { CourseHandler } from "./features/courseHandler/CourseHandler";

export default function Home() {
  const currentPage = 3;
  const totalPages = 10;
  const currentCourse = data.courses[0];
  const pageTitle = currentCourse.pages[currentPage].title;
  return (
    <div className=" mx-auto rounded-2xl max-w-5xl bg-slate-200 grid grid-rows-[20px_1fr_20px] items-center justify-items-stretch gap-8 sm:p-8 font-[family-name:var(--font-geist-sans)]">
      <Header courseTitle={currentCourse.title} />
      <main className="flex flex-col gap-8">
        <div className="flex justify-between">
          <PageTitle>{pageTitle}</PageTitle>
        </div>
        <CourseHandler data={data} currentPage={currentPage} />
      </main>
      <Footer currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}
