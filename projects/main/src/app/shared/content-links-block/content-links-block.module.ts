import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContentLinksBlockComponent } from './content-links-block/content-links-block.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ContentLinksBlockComponent,
  ],
  exports: [
    ContentLinksBlockComponent,
  ],
})
export class ContentLinksBlockModule {
}
