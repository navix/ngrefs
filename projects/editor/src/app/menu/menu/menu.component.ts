import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SectionComponent } from '../../section/section/section.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {
  constructor(
    private sectionComponent: SectionComponent,
  ) {
  }

  get menu() {
    return this.sectionComponent.section.menu;
  }

  ngOnInit() {
  }
}
