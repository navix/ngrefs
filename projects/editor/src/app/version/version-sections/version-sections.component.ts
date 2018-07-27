import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { VersionComponent } from '../version/version.component';

@Component({
  selector: 'app-version-sections',
  templateUrl: './version-sections.component.html',
  styleUrls: ['./version-sections.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VersionSectionsComponent implements OnInit {

  constructor(
    private versionComponent: VersionComponent,
    private data: DataService,
  ) {
  }

  get sections() {
    return this.versionComponent.version.sections;
  }

  ngOnInit() {
  }

  createSection() {
    this.sections.push(this.data.createSection());
  }

  remove(index: number) {
    this.sections.splice(index, 1);
  }
}
