import { DocGen } from '@ngx-kit/docgen/meta';
import * as angularApiRaw from './angular.json';

console.log('angularApiRaw', angularApiRaw);

export const angularApi: DocGen.Doc = angularApiRaw as any;
