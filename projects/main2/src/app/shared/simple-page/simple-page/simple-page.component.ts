import { Component, Input } from '@angular/core';
import { NavEntry } from '../../../layout/nav/meta';

@Component({
  selector: 'app-simple-page',
  templateUrl: './simple-page.component.html',
  styleUrls: ['./simple-page.component.scss'],
})
export class SimplePageComponent {
  @Input() nav?: NavEntry[];
}
