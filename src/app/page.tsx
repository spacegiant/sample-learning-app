// import Image from "next/image";

import { Footer, Header } from "@/components";
import { data } from "@/data/data";
import { CourseHandler } from "./features/courseHandler/CourseHandler";

export default function Home() {
  return (
    <div className=" mx-auto rounded-2xl max-w-5xl bg-slate-200 grid grid-rows-[20px_1fr_20px] items-center justify-items-stretch gap-8 sm:p-8 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-8">
        <CourseHandler data={data} currentPage={3} />
      </main>
      <Footer />
    </div>
  );
}
