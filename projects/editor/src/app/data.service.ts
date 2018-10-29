import { Injectable } from '@angular/core';
import { isArray, isObject, uuid } from '@ngx-kit/core';
import {
  ContentEntry,
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
    uiMessages: [],
  };

  readonly sourceLang = 'en';

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
      langs: {},
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

  cleanUpMessages() {
    this.data.versions.forEach(v => {
      v.messages = v.messages
        // Filter messages without any texts
        .filter(m => {
          if (m.locales) {
            if (m.locales.find(l => !!l.text)) {
              return true;
            } else {
              // Message has locales but with empty text
              return false;
            }
          } else {
            // No locales defined in the message
            return false;
          }
        })
        // Clean up useSource locales
        .map(m => {
          // Remove empty
          m.locales = m.locales.filter(l => l.text || l.useSource);
          // Remove text if useSource
          m.locales.forEach(l => {
            if (l.useSource && l.text) {
              l.text = '';
            }
          });
          return m;
        });
    });
  }

  findMessagePath(id: number): any[] | undefined {
    for (const versionKey in this.data.versions) {
      const version = this.data.versions[versionKey];
      for (const sectionKey in version.sections) {
        const section = version.sections[sectionKey];
        if (this.isMessageRefExist(section.title, id)) {
          return ['versions', version.id, 'sections', section.id];
        }
        if (this.isMessageRefExist(section.menu, id)) {
          return ['versions', version.id, 'sections', section.id, 'menu'];
        }
        for (const pageKey in section.pages) {
          const page = section.pages[pageKey];
          if (this.isMessageRefExist(page, id)) {
            return ['versions', version.id, 'sections', section.id, 'pages', page.id];
          }
        }
      }
    }
  }

  isMessageRefExist(data: any, id: number): boolean {
    if (data) {
      if (data.id && data.id === id) {
        return true;
      }
      if (isArray(data)) {
        for (const item of data) {
          if (this.isMessageRefExist(item, id)) {
            return true;
          }
        }
      }
      if (isObject(data)) {
        for (const dataKey in data) {
          if (this.isMessageRefExist(data[dataKey], id)) {
            return true;
          }
        }
      }
      return false;
    } else {
      return false;
    }
  }

  migrate() {
    if (this.data.__v !== contentFileVersion) {
      this.migrateTo2();
    }
  }

  private migrateTo2() {
    if (!this.data.__v) {
      this.data.versions.forEach(v => {
        v.sections.forEach(s => {
          s.langs = {};
        });
      });
      this.data.__v = '2';
    }
  }
}
