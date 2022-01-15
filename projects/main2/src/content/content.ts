import { Routes } from '@angular/router';
import { SectionComponent } from '../app/layout/section/section.component';
import { SimplePageComponent } from '../app/page/md-page/simple-page.component';
import { cliSection } from './cli/cli.section';

export const content = {
  sections: {
    cli: cliSection,
  },
  routes(): Routes {
    return this.sections.map(section => ({
      path: section.url,
      component: SectionComponent,
      children: section.pages.map(page => ({
        path: page.url,
        component: SimplePageComponent,
        data: {section, page},
      })),
    }));
  }
};
