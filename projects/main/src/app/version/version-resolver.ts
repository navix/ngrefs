import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { VersionLoader } from './version-loader';

@Injectable({
  providedIn: 'root',
})
export class VersionResolver implements Resolve<any> {
  constructor(
    private loader: VersionLoader,
    private router: Router,
  ) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<any> | Promise<any> | any {
    const {versionUrl} = route.params;
    const content = this.loader.load(versionUrl);
    if (content) {
      return content;
    } else {
      this.router.navigate(['/e404']);
      return false;
    }
  }
}
