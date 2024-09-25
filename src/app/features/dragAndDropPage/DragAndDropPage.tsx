import { DragAndDrop } from "@/components";
import { DragDropZones } from "@/data/dataTypes";
import _ from "lodash";

type DragAndDropPageProps = { data: DragDropZones };

export function DragAndDropPage({ data }: DragAndDropPageProps) {
  return (
    <DragAndDrop
      zoneLabels={data.zones}
      dragLabels={_.shuffle(data.solution)}
      solution={data.solution}
    />
  );
}
