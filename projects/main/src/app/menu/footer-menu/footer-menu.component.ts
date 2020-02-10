import { Component, Input, OnInit } from '@angular/core';
import { AdService } from '../../ad.service';
import { ContentVersion } from '../../content/meta';

@Component({
  selector: 'main-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.scss'],
})
export class FooterMenuComponent implements OnInit {
  @Input() version: ContentVersion;

  constructor(
    public ad: AdService,
  ) {
  }

  ngOnInit() {
  }
}
