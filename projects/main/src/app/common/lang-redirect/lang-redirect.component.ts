import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'main-lang-redirect',
  templateUrl: './lang-redirect.component.html',
  styleUrls: ['./lang-redirect.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LangRedirectComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.route.url.subscribe(url => {
      this.router.navigate(url.map(u => u.path));
    });
  }
}
