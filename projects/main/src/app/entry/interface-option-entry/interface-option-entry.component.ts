import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ContentInterfaceOptionEntry } from '../../content/meta';

@Component({
  selector: 'main-interface-option-entry',
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
