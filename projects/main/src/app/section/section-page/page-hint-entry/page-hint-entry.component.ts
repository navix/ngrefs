import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { VersionComponent } from '../../../version/version.component';

@Component({
  selector: 'app-page-hint-entry',
  templateUrl: './page-hint-entry.component.html',
  styleUrls: ['./page-hint-entry.component.scss'],
})
export class PageHintEntryComponent {
  @Input() entry: PageHintEntryComponent;
}
