export interface Data {
  courses: Course[];
}

export interface Course {
  id: string;
  title: string;
  pages: PageType[];
}

export interface PageBase {
  title: string;
  subHeading?: string;
  instruction?: string;
  image?: string;
  pageType: PageTypes;
}

// type Card = {
//   label: string;
//   image?: string;
// };

export enum PageTypes {
  DragDropZones,
  DragSlots,
  HoverOver,
  MultiChoice,
  SingleChoice,
  SimpleInfo,
  SplashPage,
  Timeline,
}

export type PageType =
  | SplashPage
  | SimpleInfo
  | DragSlots
  | DragDropZones
  | HoverOver
  | Timeline
  | SingleChoice
  | multiChoice;

// export interface SplashPage extends PageBase {
//   bodyContent: string;
// }

export type SplashPage = PageBase & {
  bodyContent: string;
};

export interface SimpleInfo extends PageBase {
  info: string;
}

export interface DragSlots extends PageBase {
  paragraph: (string | number)[];
  dragItems: string[];
  solution: (string | number)[];
}

export interface DragDropZones extends PageBase {
  zones: string[];
  dragItems: string[];
  solution: string[];
}

export interface Info {
  label: string;
  popup: string;
}

export interface HoverOver extends PageBase {
  items: Info[];
}

export interface TimelineInfo extends Info {
  date: Date;
}

export interface Timeline extends PageBase {
  events: TimelineInfo[];
}

export interface SingleChoice extends PageBase {
  radioLabels: string[];
  correctItemIndex: number;
}

export interface multiChoice extends PageBase {
  checkboxLabel: string[];
  correctItemsIndices: number[];
}
