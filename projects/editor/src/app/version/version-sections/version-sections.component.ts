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

  ngOnInit() {
  }

  get sections() {
    return this.versionComponent.version.sections;
  }

  createSection() {
    this.sections.push(this.data.createSection());
  }

  moveUp(index: number) {
    this.data.move(this.sections, index, index - 1);
  }

  moveDown(index: number) {
    this.data.move(this.sections, index, index + 1);
  }

  remove(index: number) {
    if (confirm('Delete section?')) {
      this.sections.splice(index, 1);
    }
  }
}
