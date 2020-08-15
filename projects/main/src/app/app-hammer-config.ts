import { Injectable } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';

@Injectable()
export class AppHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'swipe': {direction: 6},
    'pinch': {enable: false},
    'rotate': {enable: false},
    'pan': {enable: false},
  };
}
