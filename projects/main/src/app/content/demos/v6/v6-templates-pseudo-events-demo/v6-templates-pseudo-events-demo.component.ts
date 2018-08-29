import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-v6-templates-pseudo-events-demo',
  templateUrl: './v6-templates-pseudo-events-demo.component.html',
  styleUrls: ['./v6-templates-pseudo-events-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V6TemplatesPseudoEventsDemoComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  enterHandler() {
    alert('Enter pressed!');
  }

  escHandler() {
    alert('ESC pressed!');
  }

  shiftFHandler() {
    alert('Shift+F pressed!');
  }

}
