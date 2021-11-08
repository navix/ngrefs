import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Content } from '../content/content';

@Component({
  selector: 'main-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  constructor(
    public content: Content,
  ) {
  }
}
