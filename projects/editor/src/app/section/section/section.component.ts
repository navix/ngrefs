import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentSection } from '../../../../../main/src/app/content/meta';
import { VersionComponent } from '../../version/version/version.component';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionComponent implements OnInit {
  section: ContentSection;

  constructor(
    private route: ActivatedRoute,
    private versionComponent: VersionComponent,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(({sectionId}) => {
      this.section = this.versionComponent.version.sections.find(s => s.id === sectionId);
    });
  }
}
