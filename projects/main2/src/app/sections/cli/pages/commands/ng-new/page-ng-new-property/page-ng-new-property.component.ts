import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CliProperty, ngNewProperties } from '../ng-new-properties';

@Component({
  selector: 'app-page-ng-new-property',
  templateUrl: './page-ng-new-property.component.html',
  styleUrls: ['./page-ng-new-property.component.scss'],
})
export class PageNgNewPropertyComponent implements OnInit {
  property: CliProperty;

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this
      .route
      .params
      .subscribe(params => {
        this.property = ngNewProperties.find(p => p.cliName === params['property']);
      });
  }
}
