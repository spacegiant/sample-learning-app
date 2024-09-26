import { DragAndDrop, PageTitle } from "@/components";
import { DragDropZones } from "@/data/dataTypes";

type DragAndDropPageProps = { data: DragDropZones };

export function DragAndDropPage({ data }: DragAndDropPageProps) {
  return (
    <>
      <PageTitle>{data.title ?? ""}</PageTitle>
      <div className="flex flex-row gap-8">
        <DragAndDrop
          dragAndDropData={data}
          // zoneLabels={data.zones}
          // dragLabels={_.shuffle(data.solution)}
          // solution={data.solution}
        />
      </div>
    </>
  );
}
