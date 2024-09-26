export function Header(props: { courseTitle: string }) {
  return (
    <header className="flex justify-between items-start border-b-2 border-solid border-blue-400">
      <span className="flex-1">Sample Learning App</span>
      <span className="flex-1 text-center">{props.courseTitle}</span>
      <span className="flex-1"></span>
    </header>
  );
}
