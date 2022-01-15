import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../layout/app/app.component';

@Component({
  selector: 'app-section-intro',
  templateUrl: './section-intro.component.html',
  styleUrls: ['./section-intro.component.scss']
})
export class SectionIntroComponent implements OnInit {

  constructor(
    private app: AppComponent,
  ) {
    this.app.defBreadcrumbs();
  }

  ngOnInit(): void {
  }

}
