import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { from, Observable, Observer } from 'rxjs';

@Component({
  selector: 'main-v6-templates-asyncpipe-demo',
  templateUrl: './v6-templates-asyncpipe-demo.component.html',
  styleUrls: ['./v6-templates-asyncpipe-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V6TemplatesAsyncpipeDemoComponent implements OnInit {

  time?: Observable<string>;

  constructor(
    private platform: Platform,
  ) {
  }

  ngOnInit() {
    this.time = this.platform.isBrowser
      ? new Observable<string>((observer: Observer<string>) => {
        setInterval(() => observer.next(new Date().toString()), 1000);
      })
      : from([new Date().toString()]);
  }
}
