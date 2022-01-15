import { NavEntry } from '../../layout/nav/meta';
import { commandsNav } from './pages/commands/commands.nav';

const pref = '/cli';

export const cliNav: NavEntry[] = [
  {
    link: `${pref}/quick-start`,
    title: 'Quick Start',
  },
  {
    link: `${pref}/angular-json`,
    title: 'angular.json',
  },
  {
    link: `${pref}/commands`,
    title: 'Commands',
    children: commandsNav,
  },
];
