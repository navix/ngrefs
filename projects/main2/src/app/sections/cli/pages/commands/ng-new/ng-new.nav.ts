import { NavEntry } from '../../../../../layout/nav/meta';
import { ngNewProperties } from './ng-new-properties';

const pref = '/cli/commands/ng-new';

export const ngNewNav: NavEntry[] = ngNewProperties.map(prop => ({
  link: `${pref}/${prop.cliName}`,
  title: '--' + prop.cliName,
}));
