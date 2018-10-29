import { Component, OnInit } from '@angular/core';
import { ContentVersion } from '../../../../../main/src/app/content/meta';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-versions-list',
  templateUrl: './versions-list.component.html',
  styleUrls: ['./versions-list.component.scss'],
})
export class VersionsListComponent implements OnInit {
  constructor(
    private data: DataService,
  ) {
  }

  ngOnInit() {
  }

  get versions(): ContentVersion[] {
    return this.data.data.versions;
  }

  createVersion() {
    this.data.data.versions.push(this.data.createVersion());
  }

  moveUp(index: number) {
    this.data.move(this.data.data.versions, index, index - 1);
  }

  moveDown(index: number) {
    this.data.move(this.data.data.versions, index, index + 1);
  }

  clone(version: ContentVersion) {
    this.data.data.versions.push(this.data.cloneVersion(version));
  }
}
