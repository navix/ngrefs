import { convertCliProp } from '../../../../../util/convert-cli-prop';
import schema from './schema.json';

export interface CliProperty {
  name: string;
  cliName: string;
  description: string;
  type: string;
  alias?: string;
  default?: string;
}

export const ngNewProperties: CliProperty[] = Object
  .keys(schema.properties)
  .filter(p => schema.properties[p].visible !== false)
  .map(name => {
    const p = schema.properties[name];
    return {
      name,
      cliName: convertCliProp(name),
      description: p.description,
      type: p.enum ? p.enum.join(', ') : p.type,
      alias: p.alias,
      default: p.default,
    };
  });
