// import Image from "next/image";

import { Footer, Header } from "@/components";
import { data } from "@/data/data";
import { CourseHandler } from "./features/courseHandler/CourseHandler";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-stretch min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <header className="items-start bg-pink-300">Sample Learning App</header> */}
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <CourseHandler data={data} currentPage={3} />
      </main>
      <Footer />
    </div>
  );
}
