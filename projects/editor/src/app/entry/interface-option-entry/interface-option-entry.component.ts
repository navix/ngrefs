import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ContentInterfaceOptionEntry } from '../../../../../main/src/app/content/meta';

@Component({
  selector: 'editor-interface-option-entry',
  templateUrl: './interface-option-entry.component.html',
  styleUrls: ['./interface-option-entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InterfaceOptionEntryComponent implements OnInit {
  @Input() entry: ContentInterfaceOptionEntry;

  constructor() {
  }

  ngOnInit() {
  }

}
