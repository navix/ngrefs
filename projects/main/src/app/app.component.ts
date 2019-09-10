import { Component } from '@angular/core';
import { KitIconsRegistryService } from '@ngx-kit/core';
import { ContentVersion } from './content/meta';
import { versions } from './content/versions';
import { icons } from './icons';
import { SeoService } from './seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  versions = versions;

  constructor(
    private iconsRegistry: KitIconsRegistryService,
    private seo: SeoService, // Inject to force title rendering
  ) {
    this.iconsRegistry.add(icons);


  }
}
