import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesListComponent implements OnInit {

  constructor(
    private data: DataService,
  ) { }

  ngOnInit() {
  }

  get messages() {
  }

}
