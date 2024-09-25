import { DragAndDropZone } from "./DragAndDropZone";
import { DragAndDropItem } from "./DragAndDropItem";
import { Button } from "../Button/Button";

type DragAndDropProps = {
  zoneLabels: string[];
  dragLabels: string[];
  solution: string[];
};

export function DragAndDrop({
  zoneLabels,
  dragLabels,
  solution,
}: DragAndDropProps) {
  console.log(solution);
  return (
    <>
      <ul>
        {zoneLabels.map((label, index) => (
          <DragAndDropZone key={index}> {label}</DragAndDropZone>
        ))}
        {dragLabels.map((label, index) => (
          <DragAndDropItem key={index}>{label}</DragAndDropItem>
        ))}
      </ul>
      <Button>Check Answers</Button>
    </>
  );
}
