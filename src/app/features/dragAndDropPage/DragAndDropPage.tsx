import { DragAndDrop } from "@/components";
import { DragDropZones } from "@/data/dataTypes";

type DragAndDropPageProps = { data: DragDropZones };

export function DragAndDropPage({ data }: DragAndDropPageProps) {
  return (
    <DragAndDrop
      dragAndDropData={data}
      // zoneLabels={data.zones}
      // dragLabels={_.shuffle(data.solution)}
      // solution={data.solution}
    />
  );
}
