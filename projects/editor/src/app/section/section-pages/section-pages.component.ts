import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'app-section-pages',
  templateUrl: './section-pages.component.html',
  styleUrls: ['./section-pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionPagesComponent implements OnInit {

  constructor(
    private sectionComponent: SectionComponent,
    private data: DataService,
  ) {
  }

  get pages() {
    return this.sectionComponent.section.pages;
  }

  ngOnInit() {
  }

  createPage() {
    this.pages.push(this.data.createPage());
  }

  remove(index: number) {
    if (confirm('Remove the page?')) {
      this.pages.splice(index, 1);
    }
  }

  moveUp(index: number) {
    this.data.move(this.pages, index, index - 1);
  }

  moveDown(index: number) {
    this.data.move(this.pages, index, index + 1);
  }
}
