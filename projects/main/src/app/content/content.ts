import { Injectable } from '@angular/core';
import content2Raw from './dist/content2.json';
import { Content2Data } from './meta2';

@Injectable({
  providedIn: 'root',
})
export class Content {
  #data: Content2Data = content2Raw as any;

  get title() {
    return this.#data.title;
  }

  get sections() {
    return this.#data.sections;
  }
}
