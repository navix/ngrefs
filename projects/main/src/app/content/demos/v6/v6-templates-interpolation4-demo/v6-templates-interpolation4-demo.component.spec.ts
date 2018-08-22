import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesInterpolation4DemoComponent } from './v6-templates-interpolation4-demo.component';

describe('V6TemplatesInterpolation4DemoComponent', () => {
  let component: V6TemplatesInterpolation4DemoComponent;
  let fixture: ComponentFixture<V6TemplatesInterpolation4DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesInterpolation4DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesInterpolation4DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
