import { DocGen } from '@ngx-kit/docgen/meta';
import * as angularApiRaw from './angular.json';

export const angularApi: DocGen.Doc = angularApiRaw as any;
export const angularApiRev: string = angularApiRaw['rev'];

console.log({angularApiRev});
