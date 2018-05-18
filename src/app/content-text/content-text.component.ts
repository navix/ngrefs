import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { KitClassService } from '@ngx-kit/core';

@Component({
  selector: 'app-content-text',
  templateUrl: './content-text.component.html',
  styleUrls: ['./content-text.component.scss'],
  providers: [
    KitClassService,
  ],
})
export class ContentTextComponent implements OnInit, OnChanges {

  @Input() lang: string;

  @Input() type: 'regular' | 'tip' = 'regular';

  constructor(private kitClass: KitClassService) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.kitClass.apply({type: this.type});
  }
}
