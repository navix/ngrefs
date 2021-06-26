import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SeoService } from '../../../seo.service';

@Component({
  selector: 'main-cli-content-angular-json',
  templateUrl: './cli-content-angular-json.component.html',
  styleUrls: ['./cli-content-angular-json.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CliContentAngularJsonComponent implements OnInit {
  title = 'Configure angular.json';

  constructor(
    private seo: SeoService,
  ) {
  }

  ngOnInit(): void {
    this.seo.setup({
      title: this.title,
    });
  }
}
