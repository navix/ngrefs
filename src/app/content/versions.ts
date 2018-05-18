import { ContentVersion } from '../meta';
import * as rawVersions from './versions.json';

export const versions: ContentVersion[] = (rawVersions as any).versions;
