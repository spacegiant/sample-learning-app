import { Button } from "..";

type FooterProps = {
  currentPage: number;
  totalPages: number;
};

export function Footer({ currentPage, totalPages }: FooterProps) {
  const progressDisplay = `Page ${currentPage} / ${totalPages}`;
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-end opacity-30 hover:opacity-100">
      <Button>Back</Button>
      <span>{progressDisplay}</span>
      <Button>Forward</Button>
    </footer>
  );
}
