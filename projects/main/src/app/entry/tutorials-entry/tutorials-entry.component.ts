import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ContentTutorialsEntry } from '../../content/meta';

@Component({
  selector: 'main-tutorials-entry',
  templateUrl: './tutorials-entry.component.html',
  styleUrls: ['./tutorials-entry.component.scss'],
})
export class TutorialsEntryComponent implements OnInit, OnChanges {
  @Input() entry: ContentTutorialsEntry;

  display: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.display = this.entry.links && this.entry.links.length > 0;
  }
}
