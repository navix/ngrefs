import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentSection } from '../../content/meta';
import { VersionPageComponent } from '../../version-page/version-page.component';

@Component({
  selector: 'app-section-holder',
  templateUrl: './section-holder.component.html',
  styleUrls: ['./section-holder.component.scss'],
})
export class SectionHolderComponent implements OnInit {
  section: ContentSection;

  constructor(
    private route: ActivatedRoute,
    private versionPage: VersionPageComponent,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(({sectionUrl}) => {
      this.section = Object.values(this.versionPage.version.sections)
        .find(s => s.url === sectionUrl);
    });
  }
}
