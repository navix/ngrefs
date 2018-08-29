import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesClass1DemoComponent } from './v6-templates-class1-demo.component';

describe('V6TemplatesClass1DemoComponent', () => {
  let component: V6TemplatesClass1DemoComponent;
  let fixture: ComponentFixture<V6TemplatesClass1DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesClass1DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesClass1DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
