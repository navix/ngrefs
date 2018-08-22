import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { V6TemplatesDeclarDemoComponent } from './v6/v6-templates-declar-demo/v6-templates-declar-demo.component';
import { V6TemplatesDirective1DemoDirective } from './v6/v6-templates-directive1-demo/v6-templates-directive1-demo.directive';
import { V6TemplatesInterpolation1DemoComponent } from './v6/v6-templates-interpolation1-demo/v6-templates-interpolation1-demo.component';
import { V6TemplatesInterpolation2DemoComponent } from './v6/v6-templates-interpolation2-demo/v6-templates-interpolation2-demo.component';
import { V6TemplatesInterpolation3DemoComponent } from './v6/v6-templates-interpolation3-demo/v6-templates-interpolation3-demo.component';
import { V6TemplatesInterpolation4DemoComponent } from './v6/v6-templates-interpolation4-demo/v6-templates-interpolation4-demo.component';
import { V6TemplatesDirective1DemoComponent } from './v6/v6-templates-directive1-demo/v6-templates-directive1-demo.component';
import { V6TemplatesComponent1DemoComponent } from './v6/v6-templates-component1-demo/v6-templates-component1-demo.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    V6TemplatesDeclarDemoComponent,
    V6TemplatesInterpolation1DemoComponent,
    V6TemplatesInterpolation2DemoComponent,
    V6TemplatesInterpolation3DemoComponent,
    V6TemplatesInterpolation4DemoComponent,
    V6TemplatesDirective1DemoComponent,
    V6TemplatesDirective1DemoDirective,
    V6TemplatesComponent1DemoComponent,
  ],
  exports: [],
  providers: [],
  entryComponents: [
    V6TemplatesDeclarDemoComponent,
    V6TemplatesInterpolation1DemoComponent,
    V6TemplatesInterpolation2DemoComponent,
    V6TemplatesInterpolation3DemoComponent,
    V6TemplatesInterpolation4DemoComponent,
    V6TemplatesDirective1DemoComponent,
    V6TemplatesComponent1DemoComponent,
  ],
})
export class DemosModule {
}
