import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-v6-templates-animation-demo',
  templateUrl: './v6-templates-animation-demo.component.html',
  styleUrls: ['./v6-templates-animation-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)',
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)',
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out')),
    ]),
  ],
})
export class V6TemplatesAnimationDemoComponent implements OnInit {
  transform(value: number, multiplier: number = 2): string {
    return value * multiplier;
  }

  heroes = [
    {
      name: 'Superman',
      active: true,
    },
    {
      name: 'Batman',
      active: true,
    },
    {
      name: 'Aquaman',
      active: false,
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
