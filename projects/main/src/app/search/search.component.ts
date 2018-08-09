import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { KitFocusManagerService, KitModalRef } from '@ngx-kit/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { ContentEntry, ContentPage, ContentSection, ContentVersion } from '../content/meta';
import { extractMessage } from '../message/extract-message';
import { VersionComponent } from '../version/version.component';

@Component({
  selector: 'main-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    KitFocusManagerService,
  ],
})
export class SearchComponent implements OnInit {
  queryChanges = new BehaviorSubject<string>('');

  version: ContentVersion;

  lang: string;

  query: string;

  searchResults: {
    sectionTitle: string;
    sectionUrl: string;
    pageTitle: string;
    pageUrl: string;
    entryTitle?: string;
    fragment?: string;
  }[] = [];

  private readonly debounceTime = 150;

  private pagesIndex: {
    section: ContentSection;
    sectionTitle: string;
    page: ContentPage;
    pageTitle: string;
    title: string;
  }[] = [];

  private entriesIndex: {
    section: ContentSection;
    sectionTitle: string;
    page: ContentPage;
    pageTitle: string;
    entry: ContentEntry;
    entryTitle: string;
    fields: string[];
  }[] = [];

  constructor(
    private versionComponent: VersionComponent,
    private cdr: ChangeDetectorRef,
    private modalRef: KitModalRef<SearchComponent>,
    private focusManager: KitFocusManagerService,
  ) {
  }

  ngOnInit() {
    this.focusManager.autoCapture = true;
    this.focusManager.init();
    // Prepare index
    this.version = this.versionComponent.version;
    this.lang = this.versionComponent.lang;
    this.versionComponent.version.sections
      .forEach(section => {
        const sectionTitle = extractMessage(this.version.messages, section.title, this.lang);
        section.pages.forEach(page => {
          const pageTitle = extractMessage(this.version.messages, page.title, this.lang);
          this.pagesIndex.push({
            section,
            sectionTitle,
            page,
            pageTitle,
            title: pageTitle.toLowerCase(),
          });
          page.entries.forEach((entry: any) => {
            let entryTitle;
            let fields = [];
            switch (entry.type) {
              case 'text':
                fields = [extractMessage(this.version.messages, entry.text, this.lang).toLowerCase()];
                break;
              case 'command-param':
                entryTitle = entry.name;
                fields = [
                  entry.name,
                  entry.values,
                  entry.default,
                  entry.aliases,
                  extractMessage(this.version.messages, entry.description, this.lang).toLowerCase(),
                ];
            }
            if (fields.filter(f => !!f).length > 0) {
              this.entriesIndex.push({
                section,
                sectionTitle,
                page,
                pageTitle,
                entry,
                entryTitle,
                fields: fields.filter(f => !!f).map(f => f + ''),
              });
            }
          });
        });
      });
    // Handle search
    this.queryChanges
      .asObservable()
      .pipe(
        debounceTime(this.debounceTime),
        filter(query => !!query),
      )
      .subscribe(query => {
        this.query = query.toLowerCase();
        this.search();
      });
  }

  close() {
    this.modalRef.close();
  }

  private search() {
    this.searchResults = [];
    // Search in page titles
    const pagesResults = this.pagesIndex
      .filter(pi => pi.title.indexOf(this.query) !== -1)
      .map(pi => ({
        sectionTitle: pi.sectionTitle,
        sectionUrl: pi.section.url,
        pageTitle: pi.pageTitle,
        pageUrl: pi.page.url,
        fragment: undefined,
      }));
    // Search in entries
    const entriesResults = this.entriesIndex
      .filter(ei => ei.fields.find(f => f.indexOf(this.query) !== -1))
      .map(ei => ({
        sectionTitle: ei.sectionTitle,
        sectionUrl: ei.section.url,
        pageTitle: ei.pageTitle,
        pageUrl: ei.page.url,
        entryTitle: ei.entryTitle,
        fragment: ei.entry.headId,
      }));
    // Show results
    this.searchResults = [...pagesResults, ...entriesResults].filter((res, index, self) =>
      index === self.findIndex((r) => (
        r.sectionUrl === res.sectionUrl && r.pageUrl === res.pageUrl && r.fragment === res.fragment
      )),
    );
    this.cdr.detectChanges();
  }

}
