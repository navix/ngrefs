import { Injectable } from '@angular/core';
import { uuid } from '@ngx-kit/core';
import {
  ContentEntry,
  ContentEntryType,
  ContentFile,
  ContentMenuItem,
  ContentPage,
  ContentSection,
  ContentVersion,
} from '../../../main/src/app/content/meta';

export const contentFileVersion = '2';

/**
 * Editor ONLY service.
 */
@Injectable({
  providedIn: 'root',
})
export class DataService {
  data: ContentFile = {
    __v: contentFileVersion,
    versions: [],
  };

  readonly sourceLang = 'en';

  constructor() {
    this.logData();
  }

  createVersion(): ContentVersion {
    return {
      id: uuid(),
      sections: [],
    };
  }

  cloneVersion(version: ContentVersion): ContentVersion {
    const cloned: ContentVersion = JSON.parse(JSON.stringify(version));
    cloned.id = uuid();
    return cloned;
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

  createEntry<T extends ContentEntry>(type: ContentEntryType = 'text'): T {
    return {
      id: uuid(),
      type,
    } as any;
  }

  createMenuItem(): ContentMenuItem {
    return {
      id: uuid(),
    };
  }

  logData() {
//    console.log('DATA', this.data);
  }

  delete(array: any, index: number) {
    array.splice(index, 1);
  }

  move(array: any[], from: number, to: number) {
    if (to >= 0 && to < array.length) {
      array.splice(to, 0, array.splice(from, 1)[0]);
    }
  }

  migrate() {
  }
}
