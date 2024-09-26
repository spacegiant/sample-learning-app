"use client";

import { DragDropZones } from "@/data/dataTypes";
import {
  DndContext,
  DragEndEvent,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";
import _ from "lodash";
import React, { useEffect } from "react";

import { ReactNode, useState } from "react";

type DragAndDropProps = {
  dragAndDropData: DragDropZones;
};

type ListOfAnswers = { answerId: string; answer: string }[];
const shuffledAnswers: { answerId: string; answer: string }[] = [];

function shuffleAnswers(listOfAnswers: ListOfAnswers) {
  const shuffled = _.shuffle(listOfAnswers);
  shuffledAnswers.push(...shuffled);
}

export function DragAndDrop({ dragAndDropData }: DragAndDropProps) {
  // Important: Prevent error when shuffled items rehydrating
  // Source: https://nextjs.org/docs/messages/react-hydration-error
  const [isClient, setIsClient] = useState(false);

  const data = dragAndDropData.items;

  useEffect(() => {
    setIsClient(true);
  }, []);
  // END

  useEffect(() => {
    if (shuffledAnswers.length === 0) {
      shuffleAnswers(dragAndDropData.items);
    }
  }, [dragAndDropData.items]);

  // const [isDropped, setIsDropped] = useState(false);

  const zoneItemsInit = dragAndDropData.items.map((item) => {
    return {
      questionId: item.questionId,
      answerId: "",
    };
  });

  const [zoneItems, updateZoneItems] = useState(zoneItemsInit);

  const handleUpdateZoneItems = ({
    questionId,
    answerId,
  }: {
    questionId: string;
    answerId: string;
  }) => {
    const nextZoneItems = zoneItems.map((item) => {
      if (item.questionId === questionId) {
        return {
          questionId,
          answerId,
        };
      } else if (item.answerId === answerId) {
        return {
          questionId,
          answerId: "",
        };
      } else {
        return item;
      }
    });
    updateZoneItems(nextZoneItems);
  };

  const draggables = shuffledAnswers.map((item, index) => {
    const hasBeenDropped = () => {
      const foundItem = zoneItems.filter((zi) => zi.answerId === item.answerId);
      if (foundItem[0]) return foundItem[0].answerId !== "";
    };
    const classes = ["p-1"];
    return (
      <Draggable key={index} id={item.answerId}>
        <Card classNames={classes}>
          {item.answer}
          {hasBeenDropped() == true && "Yes"}
        </Card>
      </Draggable>
    );
  });

  const droppables = data.map((item, index) => {
    // console.log(zoneItems);
    const hasAnswer = () => {
      const foundItem = zoneItems.filter(
        (zi) => zi.questionId === item.questionId
      );
      if (foundItem[0]) return foundItem[0].answerId !== "";
    };

    return (
      <Droppable key={index} id={item.questionId}>
        <Card>
          {item.questionLabel}
          {hasAnswer() && "true"}
        </Card>
      </Droppable>
    );
  });

  function handleDragEnd(event: DragEndEvent) {
    if (event.over?.id == null) {
      console.log("NULL");
      return;
    }

    handleUpdateZoneItems({
      questionId: event.over?.id.toString(),
      answerId: event.active.id.toString(),
    });
    // if (event.over && event.over.id === "droppable") {
    //   setIsDropped(true);
    // }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex flex-1 flex-col items-center">
        {/* {!isDropped ? droppables : null} */}
        {droppables}
      </div>
      <div className="flex-0 content-center w-32">
        <p className="text-xl pb-4">Drag Left</p>
        <p>{dragAndDropData.instruction}</p>
      </div>
      <div className="flex flex-1 flex-col items-center">
        {isClient && draggables}
      </div>
    </DndContext>
  );
}

function Droppable(props: { children: ReactNode; id: string }) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    height: "10rem",
    color: isOver ? "green" : undefined,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}

function Draggable(props: { children: ReactNode; id: string }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <span
      ref={setNodeRef}
      style={{ height: "10rem", ...style }}
      {...listeners}
      {...attributes}
    >
      {props.children}
    </span>
  );
}

function Card(props: { children: ReactNode; classNames?: string[] }) {
  console.log(props.classNames);
  const classes = `px-8 py-4 rounded-md text-black min-w-52 min-h-36 inline-block flex items-center justify-center bg-gray-300`;
  return <span className={classes}>{props.children}</span>;
}
