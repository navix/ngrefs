import { Injectable } from '@angular/core';
import { uuid } from '@ngx-kit/core';
import {
  ContentEntry,
  ContentMenuItem,
  ContentPage,
  ContentSection,
  ContentVersion,
} from '../../../main/src/app/content/meta';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data: {
    versions: ContentVersion[];
  } = {
    versions: [],
  };

  constructor() {
    this.logData();
  }

  createVersion(): ContentVersion {
    return {
      id: uuid(),
      langs: ['en', 'ru'],
      sections: [],
      messages: [],
    };
  }

  createSection(): ContentSection {
    return {
      id: uuid(),
      menu: {
        items: [],
      },
      pages: [],
    };
  }

  createPage(): ContentPage {
    return {
      id: uuid(),
      entries: [],
    };
  }

  createEntry(): ContentEntry {
    return {
      id: uuid(),
      type: 'text',
    };
  }

  createMenuItem(): ContentMenuItem {
    return {
      id: uuid(),
    };
  }

  logData() {
    console.log('DATA', this.data);
  }

  delete(array: any, index: number) {
    array.splice(index, 1);
  }

  move(array: any[], from: number, to: number) {
    if (to >= 0 && to < array.length) {
      array.splice(to, 0, array.splice(from, 1)[0]);
    }
  }
}
