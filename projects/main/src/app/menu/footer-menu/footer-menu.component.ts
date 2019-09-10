import { Component, Input, OnInit } from '@angular/core';
import { AdService } from '../../ad.service';
import { ContentVersion } from '../../content/meta';
import { CrossLinkingService } from '../../cross-linking.service';
import { VersionComponent } from '../../version/version.component';

@Component({
  selector: 'main-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.scss'],
})
export class FooterMenuComponent implements OnInit {
  @Input() version: ContentVersion;

  year = (new Date()).getFullYear();

  constructor(
    public ad: AdService,
    private versionComponent: VersionComponent,
    private cls: CrossLinkingService,
  ) {
  }

  ngOnInit() {
  }
}
