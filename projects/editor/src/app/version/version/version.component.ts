import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentVersion } from '../../../../../main/src/app/content/meta';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss'],
})
export class VersionComponent implements OnInit {
  @Input() version: ContentVersion;

  constructor(
    private route: ActivatedRoute,
    private data: DataService,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(({versionId}) => {
      this.version = this.data.data.versions.find(v => v.id === versionId);
    });
  }
}
