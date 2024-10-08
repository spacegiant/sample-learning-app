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
          title: "Accessibility Tools",
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
              questionLabel: "Motor Disability",
              answerId: "answer-2",
              answer: "Keyboard Accessibility",
            },
            {
              questionId: "question-3",
              questionLabel: "Auditory Disabilities",
              answerId: "answer-3",
              answer: "Captions & Transcripts",
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
          title: "Accessibility - The Whys",
          instruction:
            "Match the business type to the benefit of implementing accessibility standards",
          items: [
            {
              questionId: "question-1",
              questionLabel: "Required by UK Law",
              answerId: "answer-1",
              answer: "Public Sector",
            },
            {
              questionId: "question-2",
              questionLabel: "Could lose lucrative customers",
              answerId: "answer-2",
              answer: "Commercial Businesses",
            },
            {
              questionId: "question-3",
              questionLabel: "Help prevent discrimination complaints",
              answerId: "answer-3",
              answer: "All Businesses",
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
