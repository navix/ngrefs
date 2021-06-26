import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ngNewOptions } from './ng-new-options';

@Component({
  selector: 'main-cli-content-ng-new',
  templateUrl: './cli-content-ng-new.component.html',
  styleUrls: ['./cli-content-ng-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CliContentNgNewComponent implements OnInit {
  options = ngNewOptions;

  constructor() { }

  ngOnInit(): void {
  }

}
