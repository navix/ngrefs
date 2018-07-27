import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { VersionComponent } from '../version/version.component';

@Component({
  selector: 'app-version-general',
  templateUrl: './version-general.component.html',
  styleUrls: ['./version-general.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VersionGeneralComponent implements OnInit {
  constructor(
    private versionComponent: VersionComponent,
  ) {
  }

  get version() {
    return this.versionComponent.version;
  }

  ngOnInit() {
  }
}
