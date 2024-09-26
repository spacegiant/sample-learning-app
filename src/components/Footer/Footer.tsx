import { PaginationButton } from "../Button/Button";

type FooterProps = {
  currentPage: number;
  totalPages: number;
};

export function Footer({ currentPage, totalPages }: FooterProps) {
  const progressDisplay = `Page ${currentPage} / ${totalPages}`;
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-end">
      <div className="rounded-md bg-slate-300">
        <PaginationButton>
          ←<span className="sr-only">Go to previous page</span>
        </PaginationButton>
        <span className="px-4">{progressDisplay}</span>
        <PaginationButton isRight>
          →<span className="sr-only">Go to next page</span>
        </PaginationButton>
      </div>
    </footer>
  );
}
