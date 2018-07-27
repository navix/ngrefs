import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'app-section-general',
  templateUrl: './section-general.component.html',
  styleUrls: ['./section-general.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionGeneralComponent implements OnInit {

  constructor(
    private sectionComponent: SectionComponent,
  ) {
  }

  get section() {
    return this.sectionComponent.section;
  }

  ngOnInit() {
  }
}
