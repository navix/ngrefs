import { NavEntry } from '../../../../layout/nav/meta';
import { ngNewNav } from './ng-new/ng-new.nav';

const pref = '/cli/commands';

export const commandsNav: NavEntry[] = [
  {
    link: `${pref}/ng-new`,
    title: 'ng new',
    children: ngNewNav,
  },
  {
    link: `${pref}/ng-serve`,
    title: 'ng serve',
  },
];
