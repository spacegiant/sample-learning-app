import { DragAndDrop } from "@/components";
import { DragDropZones } from "@/data/dataTypes";

type DragAndDropPageProps = {
  data: DragDropZones;
};

export function DragAndDropPage({ data }: DragAndDropPageProps) {
  return (
    <div className="flex flex-row gap-8">
      <DragAndDrop dragAndDropData={data} />
    </div>
  );
}
