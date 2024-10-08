"use client";

import { DragDropZones } from "@/data/dataTypes";
import {
  DndContext,
  DragEndEvent,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";
import _ from "lodash";
import React, { useEffect, ReactNode, useState } from "react";
import { Button, DragCard, DropCard } from "..";

type DragAndDropProps = {
  dragAndDropData: DragDropZones;
};

type ListOfAnswers = { answerId: string; answer: string }[];
let shuffledAnswers: { answerId: string; answer: string }[] = [];

function shuffleAnswers(listOfAnswers: ListOfAnswers) {
  const shuffled = _.shuffle(listOfAnswers);
  shuffledAnswers.push(...shuffled);
}

export function DragAndDrop({
  dragAndDropData,
}: DragAndDropProps & { currentPage: number }) {
  // FIXME: Prevent error when shuffled items rehydrating
  // Source: https://nextjs.org/docs/messages/react-hydration-error
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  // END

  console.log(dragAndDropData);

  const initialZoneItems = (initialData: DragDropZones) =>
    initialData.items.map((item) => {
      return {
        questionId: item.questionId,
        answerId: "",
      };
    });

  const [zoneItems, updateZoneItems] = useState(
    initialZoneItems(dragAndDropData)
  );

  const correctAnswers = dragAndDropData.items.map((item) => {
    return {
      questionId: item.questionId,
      answerId: item.answerId,
    };
  });

  const [quizResult, setQuizResult] = useState<string | undefined>();

  const checkAnswers = () => _.isEqual(correctAnswers, zoneItems);

  const data = dragAndDropData.items;

  useEffect(() => {
    console.log("dragAndDropData.items changed");
    updateZoneItems(initialZoneItems(dragAndDropData));
    shuffledAnswers = [];
    if (shuffledAnswers.length === 0) {
      shuffleAnswers(dragAndDropData.items);
    }
  }, [dragAndDropData, dragAndDropData.items]);

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
    const foundItem = zoneItems.filter((zi) => zi.answerId === item.answerId);

    return (
      <Draggable key={index} id={item.answerId}>
        <DragCard hasBeenDropped={!!foundItem[0]?.answerId}>
          {item.answer}
        </DragCard>
      </Draggable>
    );
  });

  const droppables = data.map((item, index) => {
    const answer = zoneItems.filter(
      (zi) => zi.questionId === item.questionId
    )[0];

    const answerLabel = dragAndDropData.items.find(
      (item) => item.answerId === answer.answerId
    );

    const answerBlock = answerLabel?.answer ? (
      <>
        <div>+</div>
        <div>{answerLabel?.answer}</div>
      </>
    ) : null;

    return answer != null ? (
      <Droppable key={index} id={item.questionId} answerId={""}>
        <div>{item.questionLabel}</div>
        {answerBlock}
      </Droppable>
    ) : null;
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
  }

  const allItemsDragged =
    -1 ===
    zoneItems.findIndex((item) => {
      return item.answerId === "";
    });

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex flex-1 flex-col items-center">{droppables}</div>
      <div className="flex-0 content-center w-32">
        <p className="text-xl pb-4">Drag Left</p>
        <p className="text-md pb-4">{dragAndDropData.instruction}</p>
        <Button
          onClick={() => {
            const result = checkAnswers();
            setQuizResult(result ? "correct" : "incorrect");
          }}
          disabled={!allItemsDragged}
        >
          Check Answers
        </Button>

        <p className={quizResult ? "visible" : "invisible"}>
          {quizResult ?? ""}
        </p>
      </div>
      <div className="flex flex-1 flex-col items-center">
        {isClient && draggables}
      </div>
    </DndContext>
  );
}

function Droppable(props: {
  children: ReactNode;
  id: string;
  answerId: string;
}) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });

  return (
    <div
      ref={setNodeRef}
      style={{
        height: "10rem",
      }}
    >
      <DropCard isOver={isOver}>
        {props.children}
        {}
      </DropCard>
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
