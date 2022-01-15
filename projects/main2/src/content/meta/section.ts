import { Page } from './page';

export interface Section {
  name: string;
  pages: {[key: string]: Page};
}
