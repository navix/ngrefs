import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isDefined } from '@ngx-kit/core';
import { angularLifehooks, JsDoc } from '@ngx-kit/docgen/meta';
import { ContentCommandParamEntry, ContentInterfaceOptionEntry, ContentPage } from '../../../../../main/src/app/content/meta';
import { AngularApiService } from '../../apis/angular-api.service';
import { angularCliSchema } from '../../apis/apis';
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
    description?: {
      old?: string;
      new?: string;
    };
  }[] = [];

  cliGenerationLog: {
    action: 'add' | 'update' | 'remove';
    name: string;
    current?: {
      type: string;
      default: string;
      description: string;
    };
    new?: {
      type: string;
      default: string;
      description: string;
    };
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

  prepareInterfaceOptionGeneration() {
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
      console.log('Declar members', members);
      const entries = this.page.entries
        .filter((e): e is ContentInterfaceOptionEntry => e.type === 'interface-option');
      members.forEach(m => {
        const entry = entries.find(e => e.name === m.name);
        const signature = m.signature
          .replace('readonly ', '')
          .replace('abstract ', '')
          .replace('public ', '');
        const description = this.compileInterfaceOptionDescription(m.jsDoc);
        console.log('GENRTD DESC', description);
        if (entry && (entry.interface !== signature || entry.description !== description)) {
          this.generationLog.push({
            action: 'update',
            name: m.name,
            interface: {
              old: entry.interface,
              new: signature,
            },
            description: {
              old: entry.description,
              new: description,
            },
          });
        }
        if (!entry) {
          this.generationLog.push({
            action: 'add',
            name: m.name,
            interface: {new: signature},
            description: {new: description},
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

  compileInterfaceOptionDescription(docs: JsDoc[] | undefined) {
    console.log('CMPL', docs);
    return docs
      ?.map(d => {
        return [
          d.comment,
          ...d.tags?.map(t => {
            switch (t.name) {
              case 'description':
              case 'usageNotes':
                return `${t.value}`;
              case 'returns':
                return `Returns ${t.value}`;
            }
          }),
        ]
          .filter(e => !!e)
          .join(`\n\n`);
      })
      .join(`\n\n`);
  }

  applyInterfaceOptionGeneration() {
    if (!confirm('Are you sure?')) {
      return;
    }
    let counter = 0;
    this.generationLog.forEach(l => {
      switch (l.action) {
        case 'add': {
          const entry: ContentInterfaceOptionEntry = this.data.createEntry<ContentInterfaceOptionEntry>('interface-option');
          entry.name = l.name;
          entry.head = l.name;
          entry.headId = l.name;
          entry.interface = l.interface.new;
          entry.description = l.description.new;
          this.page.entries.push(entry);
          counter++;
          break;
        }
        case 'update': {
          const entry = this.page.entries
            .filter((e): e is ContentInterfaceOptionEntry => e.type === 'interface-option')
            .find(e => e.name === l.name);
          entry.interface = l.interface.new;
          entry.description = l.description.new;
          counter++;
          break;
        }
      }
    });
    alert(`${counter} logs have been applied!`);
    this.prepareInterfaceOptionGeneration();
  }

  prepareCommandParamGeneration() {
    this.cliGenerationLog = [];
    const def: {
      properties: {
        [i: string]: {
          type: string;
          description: string;
          default: any;
        };
      };
    } = angularCliSchema.definitions.targetOptions.definitions[this.page.generationCliBuilderName];
    if (!def) {
      alert(`Cli builder with name "${this.page.generationCliBuilderName} not found in CLI schema"`);
      return;
    }
    const entries = this.page.entries
      .filter((e): e is ContentCommandParamEntry => e.type === 'command-param');
    for (const paramName in def.properties) {
      const param = def.properties[paramName];
      const entry = entries.find(e => e.name === paramName);
      const paramType = param.type || '';
      const paramDefault = param.default || '';
      const paramDescription = param.description || '';
      // to update
      if (entry) {
        const entryType = entry.paramType || '';
        const entryDefault = entry.default || '';
        const entryDescription = entry.description || '';
        if ((entryType != paramType || entryDefault != paramDefault)) {
          this.cliGenerationLog.push({
            action: 'update',
            name: paramName,
            current: {
              type: entryType,
              default: entryDefault,
              description: entryDescription,
            },
            new: {
              type: paramType,
              default: paramDefault,
              description: paramDescription,
            },
          });
        }
      }
      // to add
      if (!entry) {
        this.cliGenerationLog.push({
          action: 'add',
          name: paramName,
          new: {
            type: paramType,
            default: paramDefault,
            description: paramDescription,
          },
        });
      }
    }
    // to remove
    entries.forEach(e => {
      const param = def.properties[e.name];
      if (!param) {
        this.cliGenerationLog.push({
          action: 'remove',
          name: e.name,
        });
      }
    });
    if (this.cliGenerationLog.length === 0) {
      alert('All entries are up to date.');
    }
  }

  applyCommandParamGeneration() {
    alert('It is a bad idea in the current condition of SCHEMA description');
    return;
    if (!confirm('Are you sure?')) {
      return;
    }
    let counter = 0;
    this.cliGenerationLog.forEach(log => {
      if (this.applyCommandParamLog(log)) {
        counter++;
      }
    });
    alert(`${counter} logs have been applied!`);
    this.prepareInterfaceOptionGeneration();
  }

  applyCommandParamLog(log: any) {
    switch (log.action) {
      case 'add': {
        const entry: ContentCommandParamEntry = this.data.createEntry<ContentCommandParamEntry>('command-param');
        entry.name = log.name;
        entry.head = log.name;
        entry.headId = log.name;
        entry.paramType = log.new.type;
        entry.default = log.new.default;
        entry.description = log.new.description;
        this.page.entries.push(entry);
        return true;
      }
      case 'update': {
        const entry = this.page.entries
          .filter((e): e is ContentCommandParamEntry => e.type === 'command-param')
          .find(e => e.name === log.name);
        entry.paramType = log.new.type;
        entry.default = log.new.default;
        return true;
      }
    }
  }
}
