import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { versions } from './content/versions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  versions = versions;

  private _currentVersionId: number;

  constructor(
    private zone: NgZone,
    private cdr: ChangeDetectorRef,
    private router: Router,
  ) {
  }

  get currentVersionId() {
    return this._currentVersionId;
  }

  set currentVersionId(value: number) {
    this.zone.onStable
      .pipe(take(1))
      .subscribe(() => {
        this._currentVersionId = value;
        this.cdr.detectChanges();
      });
  }

  get currentVersion() {
    return this.versions[this._currentVersionId || 0];
  }

  switchVersion(id: number) {
    const version = this.versions[id];
    this.router.navigate([version.index.lang, version.index.ver]);
  }
}
