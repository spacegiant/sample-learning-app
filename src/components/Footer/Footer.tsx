import { Button } from "..";

export function Footer() {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <Button>Back</Button>
      <span>Progress</span>
      <Button>Forward</Button>
    </footer>
  );
}
