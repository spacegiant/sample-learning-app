import { Data, PageTypes } from "./dataTypes";

export const data: Data = {
  courses: [
    {
      id: "abcde122345",
      title: "Web Accessibility",
      pages: [
        {
          title: "Splash",
          bodyContent: "Splash content",
          pageType: PageTypes.SplashPage,
        },
        {
          title: "Simple Info",
          info: "Splash info",
          pageType: PageTypes.SimpleInfo,
        },
        {
          title: "Drag Slots",
          paragraph: ["This", 0, "needs", 1, "slots"],
          dragItems: ["One", "Two"],
          solution: ["This", "One", "needs", "Two", "slots"],
          pageType: PageTypes.DragSlots,
        },
        {
          title: "Accessibility Quiz",
          instruction:
            "The items on the right help with the disability on the left.",
          items: [
            {
              questionId: "question-1",
              questionLabel: "Visually Impaired",
              answerId: "answer-1",
              answer: "Screen Reader",
            },
            {
              questionId: "question-2",
              questionLabel: "Two Soups",
              answerId: "answer-2",
              answer: "2",
            },
            {
              questionId: "question-3",
              questionLabel: "Three",
              answerId: "answer-3",
              answer: "3",
            },
            // {
            //   questionId: "question-4",
            //   questionLabel: "Four",
            //   answerId: "answer-4",
            //   answer: "4",
            // },
          ],
          pageType: PageTypes.DragDropZones,
        },
        {
          title: "Timeline",
          events: [
            {
              label: "One",
              popup: "Blah",
              date: new Date(),
            },
          ],
          pageType: PageTypes.Timeline,
        },
        {
          title: "Single Choice",
          instruction: "Instruction goes here",
          radioLabels: ["One", "Two", "Three"],
          correctItemIndex: 1,
          pageType: PageTypes.SingleChoice,
        },
        {
          title: "Multi Choice",
          instruction: "Instructions go here",
          checkboxLabel: ["One", "Two", "Three"],
          correctItemsIndices: [0, 2],
          pageType: PageTypes.MultiChoice,
        },
      ],
    },
  ],
};
