import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AdService } from '../../ad.service';
import { ContentVersion } from '../../content/meta';
import { SectionComponent } from '../../section/section/section.component';

@Component({
  selector: 'main-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterMenuComponent implements OnInit {
  @Input() version: ContentVersion;

  year = (new Date()).getFullYear();

  constructor(
    public sectionComponent: SectionComponent,
    public ad: AdService,
  ) {
  }

  ngOnInit() {
  }

}
