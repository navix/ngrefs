import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesInterpolation2DemoComponent } from './v6-templates-interpolation2-demo.component';

describe('V6TemplatesInterpolation2DemoComponent', () => {
  let component: V6TemplatesInterpolation2DemoComponent;
  let fixture: ComponentFixture<V6TemplatesInterpolation2DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesInterpolation2DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesInterpolation2DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
