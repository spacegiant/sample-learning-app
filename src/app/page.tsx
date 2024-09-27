"use client";

import { Footer, Header, PageTitle } from "@/components";
import { data } from "@/data/data";
import { CourseHandler } from "./features/courseHandler/CourseHandler";
import { useState } from "react";
import { Direction } from "../types";
// import { Direction } from "@dnd-kit/core/dist/types/direction";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(3);
  // const currentPage = 3;
  const currentCourse = data.courses[0];
  const totalPages = currentCourse.pages.length - 1;
  const pageTitle = currentCourse.pages[currentPage].title;

  const handlePageIncrements = (direction: Direction) => {
    if (direction === Direction.Forward) {
      if (currentPage == totalPages) return;
      setCurrentPage(currentPage + 1);
    } else {
      if (currentPage === 0) return;
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-slate-200 sla-circles-bg mx-auto rounded-2xl max-w-5xl  grid grid-rows-[20px_1fr_20px] items-center justify-items-stretch gap-8 sm:p-8 font-[family-name:var(--font-geist-sans)]">
      <Header courseTitle={currentCourse.title} />
      <main className="flex flex-col gap-8" style={{ height: "580px" }}>
        <div className="flex justify-between">
          <PageTitle>{pageTitle}</PageTitle>
        </div>
        <CourseHandler data={data} currentPage={currentPage} />
      </main>
      <Footer
        handleButtonClicks={handlePageIncrements}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
}
