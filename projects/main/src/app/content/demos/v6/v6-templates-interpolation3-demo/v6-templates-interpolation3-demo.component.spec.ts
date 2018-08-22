import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesInterpolation3DemoComponent } from './v6-templates-interpolation3-demo.component';

describe('V6TemplatesInterpolation3DemoComponent', () => {
  let component: V6TemplatesInterpolation3DemoComponent;
  let fixture: ComponentFixture<V6TemplatesInterpolation3DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesInterpolation3DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesInterpolation3DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
