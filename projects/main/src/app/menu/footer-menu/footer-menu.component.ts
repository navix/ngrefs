import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Input() showHints: boolean;

  @Output() showHintsChange = new EventEmitter<boolean>();

  year = (new Date()).getFullYear();

  constructor(
    public sectionComponent: SectionComponent,
  ) {
  }

  ngOnInit() {
  }

}
