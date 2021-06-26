import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'main-cli-content-intro',
  templateUrl: './content-intro.component.html',
  styleUrls: ['./content-intro.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentIntroComponent implements OnInit {
  title = 'Introduction';

  constructor(
    private seo: SeoService,
  ) {
  }

  ngOnInit(): void {
  }
}
