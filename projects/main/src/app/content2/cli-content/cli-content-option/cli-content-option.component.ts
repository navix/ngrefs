import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

export interface CliOption {
  name: string;
  description: string;
  values?: string;
  type?: string;
  default?: string;
  aliases?: string[];
}


@Component({
  selector: 'main-cli-content-option',
  templateUrl: './cli-content-option.component.html',
  styleUrls: ['./cli-content-option.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CliContentOptionComponent implements OnInit {
  @Input() option: CliOption;

  constructor() { }

  ngOnInit(): void {
  }
}
