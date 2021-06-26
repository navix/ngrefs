import { CliOption } from '../cli-content-option/cli-content-option.component';

export const ngNewOptions: CliOption[] = [
  {
    name: 'collection',
    description: 'Schematics collection to use.',
    type: 'string',
    default: '@schematics/angular',
    aliases: ['c'],
  },
  {
    name: 'commit',
    description: 'Initial repository commit information.',
    type: 'boolean',
    default: 'true',
  },
  {
    name: 'createApplication',
    description: 'Flag to toggle creation of an application in the new workspace.',
    type: 'boolean',
    default: 'true',
  },
];
