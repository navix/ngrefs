import { Component } from '@angular/core';
import { SxIconsRegistry } from '@novyk/sx-icon';
import { ContentVersion } from './content/meta';
import { versionsDigest } from './content/versionsDigest';
import { icons } from './icons';
import { SeoService } from './seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  versions = versionsDigest;

  constructor(
    private iconsRegistry: SxIconsRegistry,
    private seo: SeoService, // Inject to force title rendering
  ) {
    this.iconsRegistry.add(icons);
  }
}
