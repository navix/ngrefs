import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isDefined } from '@ngx-kit/core';
import { angularLifehooks } from '@ngx-kit/docgen/meta';
import { ContentCommandParamEntry, ContentInterfaceOptionEntry, ContentPage } from '../../../../../main/src/app/content/meta';
import { AngularApiService } from '../../apis/angular-api.service';
import { angularApi } from '../../apis/apis';
import { DataService } from '../../data.service';
import { SectionComponent } from '../../section/section/section.component';
import { VersionComponent } from '../../version/version/version.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent implements OnInit {
  page: ContentPage;

  generationLog: {
    action: 'add' | 'update' | 'remove';
    name: string;
    interface?: {
      old?: string;
      new?: string;
    };
    description?: string;
  }[] = [];

  constructor(
    private route: ActivatedRoute,
    private sectionComponent: SectionComponent,
    private data: DataService,
    private angularApiGen: AngularApiService,
    private versionComponent: VersionComponent,
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

  prepareGeneration() {
    this.generationLog = [];
    const declar = this.angularApiGen.getDeclar(this.page.generationFile, this.page.generationName);
    if (declar) {
      if (declar.pos) {
        this.page.generationStartLine = declar.pos.start.line;
        this.page.generationEndLine = declar.pos.end.line;
      }
      const members = declar.members
        .filter(m => !m.isInternal)
        .filter(m => !m.modifiers || m.modifiers.indexOf('private') === -1)
        .filter(m => ['constructor', ...angularLifehooks].indexOf(m.name) === -1);
      const entries = this.page.entries
        .filter((e): e is ContentInterfaceOptionEntry => e.type === 'interface-option');
      members.forEach(m => {
        const entry = entries.find(e => e.name === m.name);
        const signature = m.signature
          .replace('readonly ', '')
          .replace('abstract ', '')
          .replace('public ', '');
        if (entry && entry.interface !== signature) {
          this.generationLog.push({
            action: 'update',
            name: m.name,
            interface: {
              old: entry.interface,
              new: signature,
            },
          });
        }
        if (!entry) {
          this.generationLog.push({
            action: 'add',
            name: m.name,
            interface: {new: signature},
            description: m.jsDoc[0] ? m.jsDoc[0].comment : undefined,
          });
        }
      });
      // to remove
      entries.forEach(e => {
        const member = members.find(m => m.name === e.name);
        if (!member) {
          this.generationLog.push({
            action: 'remove',
            name: e.name,
            interface: {old: e.interface},
          });
        }
      });
      if (this.generationLog.length === 0) {
        alert('All entries are up to date.');
      }
    }
  }

  applyGeneration() {
    if (!confirm('Are you sure?')) {
      return;
    }
    let counter = 0;
    this.generationLog.forEach(l => {
      switch (l.action) {
        case 'add': {
          const message = this.data.createMessage('Interface option description', l.description);
          this.versionComponent.version.messages.push(message);
          const entry: ContentInterfaceOptionEntry = this.data.createEntry<ContentInterfaceOptionEntry>('interface-option');
          entry.name = l.name;
          entry.head = {text: l.name};
          entry.headId = l.name;
          entry.interface = l.interface.new;
          entry.description = {id: message.id};
          this.page.entries.push(entry);
          counter++;
          break;
        }
        case 'update': {
          const entry = this.page.entries
            .filter((e): e is ContentInterfaceOptionEntry => e.type === 'interface-option')
            .find(e => e.name === l.name);
          entry.interface = l.interface.new;
          counter++;
          break;
        }
      }
    });
    alert(`${counter} logs have been applied!`);
    this.prepareGeneration();
  }
}
