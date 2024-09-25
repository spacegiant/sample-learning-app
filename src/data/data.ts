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
          title: "Drop Zones",
          zones: ["one", "two", "three"],
          dragItems: ["A", "B", "C"],
          solution: ["A", "B", "C"],
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
