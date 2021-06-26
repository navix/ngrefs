import { Component } from '@angular/core';
import { SxIconsRegistry } from '@novyk/sx-icon';
import { versionsDigest } from './content/versionsDigest';
import { cliContentSettings } from './content2/cli-content/cli-content-settings';
import { SectionSettings } from './content2/meta';
import { icons } from './icons';
import { SeoService } from './seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  versions = versionsDigest;

  sections: SectionSettings[] = [
    cliContentSettings,
  ];

  constructor(
    private iconsRegistry: SxIconsRegistry,
    private seo: SeoService, // Inject to force title rendering
  ) {
    this.iconsRegistry.add(icons);
  }
}
