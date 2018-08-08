import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ContentHintEntry } from '../../content/meta';
import { VersionComponent } from '../../version/version.component';

@Component({
  selector: 'main-hint-entry',
  templateUrl: './hint-entry.component.html',
  styleUrls: ['./hint-entry.component.scss'],
})
export class HintEntryComponent {
  @Input() entry: ContentHintEntry;
}
