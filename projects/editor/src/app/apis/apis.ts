import { DocGen } from '@ngx-kit/docgen/meta';
import * as angularApiRaw from './angular.json';
import * as angularCliSchemaRaw from './schema.json';

export const angularApi: DocGen.Doc = (angularApiRaw as any).default;
export const angularCliSchema: any = (angularCliSchemaRaw as any).default;
export const angularApiRev: string = angularApiRaw['rev'];
