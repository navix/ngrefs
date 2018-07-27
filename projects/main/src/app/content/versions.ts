import * as contentRaw from './content.json';
import { ContentVersion } from './meta';

export const versions: ContentVersion[] = contentRaw['versions'];

export const defVersion = versions.find(v => v.default);
