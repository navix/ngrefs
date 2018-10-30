import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isDefined } from '@ngx-kit/core';
import { ContentCommandParamEntry, ContentPage } from '../../../../../main/src/app/content/meta';
import { DataService } from '../../data.service';
import { SectionComponent } from '../../section/section/section.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent implements OnInit {
  page: ContentPage;

  constructor(
    private route: ActivatedRoute,
    private sectionComponent: SectionComponent,
    private data: DataService,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(({pageId}) => {
      this.page = this.sectionComponent.section.pages.find(p => p.id === pageId);
    });
  }

  createEntry(index?: number) {
    this.page.entries.push(this.data.createEntry());
    if (isDefined(index)) {
      this.data.move(this.page.entries, this.page.entries.length - 1, index + 1);
    }
  }

  deleteEntry(index: number) {
    if (confirm('Delete the entry?')) {
      this.data.delete(this.page.entries, index);
    }
  }

  moveUpEntry(index: number) {
    this.data.move(this.page.entries, index, index - 1);
  }

  moveDownEntry(index: number) {
    this.data.move(this.page.entries, index, index + 1);
  }

  sortCommands() {
    if (confirm('Entries between commands/options (tutorials for example) could loose their correct position! Are you sure?')) {
      const firstIndex = this.page.entries.findIndex(e => e.type === 'command-param' || e.type === 'interface-option');
      if (firstIndex) {
        this.page.entries.sort((x, y) => {
          if ((x.type === 'command-param' && y.type === 'command-param')
            || (x.type === 'interface-option' && y.type === 'interface-option')) {
            return (x as ContentCommandParamEntry).name > (y as ContentCommandParamEntry).name ? 1 : -1;
          } else {
            return 0;
          }
        });
      }
    }
  }
}
