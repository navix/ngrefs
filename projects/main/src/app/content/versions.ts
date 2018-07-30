import * as contentRaw from './content.json';
import { ContentUiMessage, ContentVersion } from './meta';

export const versions: ContentVersion[] = contentRaw['versions'];
export const uiMessages: ContentUiMessage[] = contentRaw['uiMessages'];

export const defVersion = versions.find(v => v.default);
