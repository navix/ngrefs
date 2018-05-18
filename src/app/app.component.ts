import { Component } from '@angular/core';
import { versions } from './content/versions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  versions = versions;

  constructor() {
  }
}
