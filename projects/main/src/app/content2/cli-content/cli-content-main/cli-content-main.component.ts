import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SeoService } from '../../../seo.service';

@Component({
  selector: 'main-cli-content-main',
  templateUrl: './cli-content-main.component.html',
  styleUrls: ['./cli-content-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CliContentMainComponent implements OnInit {

  constructor(
    private seo: SeoService,
  ) {
  }

  ngOnInit(): void {
    this.seo.setPrefix('Angular CLI');
  }
}
