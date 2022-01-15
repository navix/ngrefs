import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { IconsRegistry } from '@novyk/ikong';
import { filter } from 'rxjs';
import { icons } from '../../shared/icons';
import { Breadcrumb } from './breadcrumb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  breadcrumbs: Breadcrumb[][] = [];

  rootBreadcrumbs: Breadcrumb[] = [
    {
      link: '/',
      title: 'Home',
    },
    {
      link: '/cli',
      title: 'Angular CLI',
    },
    {
      link: '/templates',
      title: 'Templates',
    },
  ];

  url?: string;

  urlChunks?: string[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private iconsRegistry: IconsRegistry,
  ) {
    this.iconsRegistry.add(icons);
    this.breadcrumbs = [this.rootBreadcrumbs];
  }

  ngOnInit() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.url = e.url;
        this.urlChunks = [];
        const chunks = e.url.split('/');
        chunks.shift();
        let curr = '';
        chunks.forEach(chunk => {
          curr += '/' + chunk;
          this.urlChunks.push(curr);
        });
        // Duplicate last chunk to properly display index pages (with ./ route).
        this.urlChunks.push(curr);
      });
  }

  nav(route: string) {
    this.router.navigate([route]);
  }

  defBreadcrumbs(breadcrumbs?: Breadcrumb[][]) {
    this.breadcrumbs = breadcrumbs ? [
      this.rootBreadcrumbs,
      ...breadcrumbs,
    ] : [this.rootBreadcrumbs];
  }
}
