import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ContentMenuItem } from '../../../../../main/src/app/content/meta';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemComponent implements OnInit {
  @Input() item: ContentMenuItem;

  @Output() delete = new EventEmitter();

  @Output() moveUp = new EventEmitter();

  @Output() moveDown = new EventEmitter();

  displayModal = false;

  constructor(
    private cdr: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
  }

  enableSub() {
    this.item.sub = {items: []};
  }
}
