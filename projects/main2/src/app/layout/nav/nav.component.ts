import { ChangeDetectorRef, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { debounce, EMPTY, filter, mapTo, merge, Subject, timer } from 'rxjs';
import { NavEntry } from './meta';
import { nav } from './nav';

// @todo  USE CLICK INSTEAD HOVER TO NAVIGATE THROW BLOCKS ???

@Component({
  selector: 'nav[main]',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  entries = nav;

  blocks: NavEntry[][] = [];

  blockHovers: NavEntry[] = [];

  isOpen = false;

  url: string;

  crumbs: NavEntry[] = [];

  enter$ = new Subject<void>();

  leave$ = new Subject<void>();

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.url = e.url;
        this.compileCrumbsAndBlocks();
      });
    merge(
      this.enter$.asObservable().pipe(mapTo(true)),
      this.leave$.asObservable().pipe(mapTo(false)),
    )
      .pipe(
        debounce(hover => timer(hover ? 50 : 400)),
      )
      .subscribe(hover => {
      this.isOpen = hover;
      this.cdr.markForCheck();
      if (!this.isOpen) {
        this.compileCrumbsAndBlocks();
      }
    });
  }

  activateBlock(index: number, entry: NavEntry) {
    this.blocks.splice(index + 1);
    this.blockHovers.splice(index);
    this.blockHovers.push(entry);
    if (entry.children) {
      this.blocks.push(entry.children);
    }
  }

  private compileCrumbsAndBlocks() {
    this.crumbs = [];
    this.blocks = [this.entries];
    this.pickCrumbs(this.crumbs, this.entries);
  }

  private pickCrumbs(crumbs: NavEntry[], entries: NavEntry[]) {
    for (const entry of entries.filter(e => !e.noBreadcrumbs)) {
      if (this.url.indexOf(entry.link) === 0) {
        crumbs.push(entry);
        if (entry.children) {
          this.blockHovers.push(entry);
          this.blocks.push(entry.children);
          this.pickCrumbs(crumbs, entry.children);
        }
        return;
      }
    }
  }
}
