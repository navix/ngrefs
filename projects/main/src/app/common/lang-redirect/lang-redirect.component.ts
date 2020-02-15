import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KitPlatformService } from '@ngx-kit/core';

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
    @Inject(DOCUMENT) private doc,
    private platform: KitPlatformService,
  ) {
  }

  ngOnInit() {
    this.route.url
      .subscribe(url => {
        const newUrl = url.map(u => u.path);
        // add canonical link for SEO
        const link: HTMLLinkElement = this.doc.createElement('link');
        link.setAttribute('rel', 'canonical');
        link.setAttribute('href', `https://ngrefs.com/${newUrl.join('/')}`);
        this.doc.head.appendChild(link);
        // redirect
        if (this.platform.isBrowser()) {
          this.router.navigate(newUrl);
        }
      });
  }
}
