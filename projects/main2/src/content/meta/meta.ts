import { ContentTutorials } from './content-tutorials';

export interface ContentEntryTutorial {
  type: 'tutorials';
  links: {
    href: string;
    title: string;
  }[];
}

export type ContentEntry = ContentTutorials;

export interface SimplePage {
  url: string;
  title: string;
  content: (string | ContentEntry)[];
}

export interface PageData {
  simplePage?: SimplePage;
}
