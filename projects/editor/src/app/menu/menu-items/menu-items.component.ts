import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ContentMenuItem } from '../../../../../main/src/app/content/meta';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemsComponent implements OnInit {
  @Input() items: ContentMenuItem[];

  constructor(
    private data: DataService,
  ) {
  }

  ngOnInit() {
  }

  createItem() {
    this.items.push(this.data.createMenuItem());
  }

  delete(index: number) {
    if (confirm('Delete menu items?')) {
      this.items.splice(index, 1);
    }
  }

  moveUp(index: number) {
    this.data.move(this.items, index, index - 1);
  }

  moveDown(index: number) {
    this.data.move(this.items, index, index + 1);
  }
}
