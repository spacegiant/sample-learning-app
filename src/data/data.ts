import { Data } from "./dataTypes";

export const data: Data = {
  courses: [
    {
      id: "abcde122345",
      title: "Web Accessibility",
      pages: [
        {
          title: "Splash",
          bodyContent: "Splash content",
        },
        {
          title: "Simple Info",
          info: "Splash info",
        },
        {
          title: "Drag Slots",
          paragraph: ["This", 0, "needs", 1, "slots"],
          dragItems: ["One", "Two"],
          solution: ["This", "One", "needs", "Two", "slots"],
        },
        {
          title: "Drop Zones",
          zones: ["one", "two", "three"],
          dragItems: ["A", "B", "C"],
          solution: ["A", "B", "C"],
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
        },
        {
          title: "Single Choice",
          instruction: "Instruction goes here",
          radioLabels: ["One", "Two", "Three"],
          correctItemIndex: 1,
        },
        {
          title: "Multi Choice",
          instruction: "Instructions go here",
          checkboxLabel: ["One", "Two", "Three"],
          correctItemsIndices: [0, 2],
        },
      ],
    },
  ],
};
