import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SeoService } from '../../../seo.service';

@Component({
  selector: 'main-cli-content-quick-start',
  templateUrl: './cli-content-quick-start.component.html',
  styleUrls: ['./cli-content-quick-start.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CliContentQuickStartComponent implements OnInit {
  title = 'Angular Quick Start';

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
