import { Component } from '@angular/core';
import { versionsDigest } from './content/versionsDigest';
import { SeoService } from './seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  versions = versionsDigest;

  constructor(
    private seo: SeoService, // Inject to force title rendering
  ) {
  }
}
