import { DocGen } from '@ngx-kit/docgen/meta';
import angularSchema from './angular.json';
import angularCliSchemaJson from './workspace-schema.json';

export const angularApi: DocGen.Doc = {
  files: angularSchema.files,
  filesMap: angularSchema.filesMap,
};
export const angularCliSchema: any = angularCliSchemaJson;
export const angularApiRev: string = angularSchema.rev;
