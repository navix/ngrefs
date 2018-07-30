import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { VersionPageComponent } from '../../../version-page/version-page.component';

@Component({
  selector: 'app-page-hint-entry',
  templateUrl: './page-hint-entry.component.html',
  styleUrls: ['./page-hint-entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHintEntryComponent {
  @Input() entry: PageHintEntryComponent;
}
