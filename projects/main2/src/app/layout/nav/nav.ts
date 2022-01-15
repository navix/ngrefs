import { cliNav } from '../../sections/cli/cli.nav';
import { NavEntry } from './meta';

export const nav: NavEntry[] = [
  {
    title: 'Home',
    link: '',
    noBreadcrumbs: true,
    exactActive: true,
  },
  {
    title: 'CLI',
    link: '/cli',
    children: cliNav,
  },
  {
    title: 'Templates',
    link: '/templates',
  },
];
