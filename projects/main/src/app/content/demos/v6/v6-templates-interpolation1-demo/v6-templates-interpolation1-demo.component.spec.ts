import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesInterpolation1DemoComponent } from './v6-templates-interpolation1-demo.component';

describe('V6TemplatesInterpolation1DemoComponent', () => {
  let component: V6TemplatesInterpolation1DemoComponent;
  let fixture: ComponentFixture<V6TemplatesInterpolation1DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesInterpolation1DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesInterpolation1DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
