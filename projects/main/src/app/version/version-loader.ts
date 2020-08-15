import { Injectable } from '@angular/core';
import { ContentVersion } from '../content/meta';

@Injectable({
  providedIn: 'root',
})
export class VersionLoader {
  // @todo replace any
  async load(version: string): Promise<ContentVersion | false> {
    switch (version) {
      case 'v6':
        return (await import('../content/dist/v6.json')).default as any;
      case 'v7':
        return (await import('../content/dist/v7.json')).default as any;
      case 'v8':
        return (await import('../content/dist/v8.json')).default as any;
      case 'v9':
        return (await import('../content/dist/v9.json')).default as any;
      case 'latest':
        return (await import('../content/dist/latest.json')).default as any;
      default:
        return false;
    }
  }
}
