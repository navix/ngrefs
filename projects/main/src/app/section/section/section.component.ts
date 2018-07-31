import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentSection } from '../../content/meta';
import { VersionComponent } from '../../version/version.component';

@Component({
  selector: 'main-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
  section: ContentSection;

  showHints = true;

  constructor(
    private route: ActivatedRoute,
    private versionComponent: VersionComponent,
  ) {
  }

  get version() {
    return this.versionComponent.version;
  }

  ngOnInit() {
    this.route.params.subscribe(({sectionUrl}) => {
      this.section = Object.values(this.version.sections)
        .find(s => s.url === sectionUrl);
    });
  }
}
