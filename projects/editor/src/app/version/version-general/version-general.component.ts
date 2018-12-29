import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AngularApiService } from '../../apis/angular-api.service';
import { angularApiRev } from '../../apis/apis';
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
    private angularApiGen: AngularApiService,
  ) {
  }

  ngOnInit() {
  }

  get version() {
    return this.versionComponent.version;
  }

  updateGenerations() {
    if (!confirm(`Are you sure? Does current version (${this.version.title}) correspond the sources version?`)) {
      return;
    }
    // Update rev
    this.version.githubUrl = `https://github.com/angular/angular/blob/${angularApiRev}/packages`;
    // Update starts/ends
    let counter = 0;
    this.version.sections.forEach(s => {
      s.pages.forEach(p => {
        if (p.generationFile && p.generationName) {
          const declar = this.angularApiGen.getDeclar(p.generationFile, p.generationName);
          if (declar
            && declar.pos
            && p.generationStartLine !== declar.pos.start.line
            && p.generationEndLine !== declar.pos.end.line) {
            p.generationStartLine = declar.pos.start.line;
            p.generationEndLine = declar.pos.end.line;
            counter++;
          }
        }
      });
    });
    alert(`${counter} pages have been updated`);
  }
}
