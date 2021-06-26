import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'main-content-links-block',
  templateUrl: './content-links-block.component.html',
  styleUrls: ['./content-links-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentLinksBlockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
