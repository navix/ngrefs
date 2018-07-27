import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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

  get versions(): ContentVersion[] {
    return this.data.data.versions;
  }

  ngOnInit() {
  }

  createVersion() {
    this.data.data.versions.push(this.data.createVersion());
  }
}
