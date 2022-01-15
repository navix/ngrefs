import { ContentTutorials } from '../meta/content-tutorials';
import { SimplePage } from '../meta/meta';
import { Page } from '../meta/page';

export const introPage: Page = {
  title: 'Intro',
  content: [
    // @todo how to make in-text routerLinks ???
    'This simple Angular CLI reference for developers describes commands, features and Schematics.',
    'The Angular CLI is a command-line interface tool that you use to initialize, develop, scaffold, and maintain Angular applications directly from a command shell.',
    new ContentTutorials([
      {href: 'https://angular.io/guide/quickstart', title: 'Angular Quick Start'},
      {href: 'https://github.com/angular/angular-cli', title: 'CLI tool for Angular on GitHub'},
      {
        href: 'https://blog.nrwl.io/angular-cli-demystifying-the-workspace-7f59ffaab4cb',
        title: 'Angular CLI — Demystifying the workspace',
      },
    ]),
  ],
};

export const content__cli_intro: SimplePage = {
  url: 'cli/intro',
  title: 'Intro',
  content: [
    // @todo how to make in-text routerLinks ???
    'This simple Angular CLI reference for developers describes commands, features and Schematics.',
    'The Angular CLI is a command-line interface tool that you use to initialize, develop, scaffold, and maintain Angular applications directly from a command shell.',
    new ContentTutorials([
      {href: 'https://angular.io/guide/quickstart', title: 'Angular Quick Start'},
      {href: 'https://github.com/angular/angular-cli', title: 'CLI tool for Angular on GitHub'},
      {
        href: 'https://blog.nrwl.io/angular-cli-demystifying-the-workspace-7f59ffaab4cb',
        title: 'Angular CLI — Demystifying the workspace',
      },
    ]),
  ],
};
