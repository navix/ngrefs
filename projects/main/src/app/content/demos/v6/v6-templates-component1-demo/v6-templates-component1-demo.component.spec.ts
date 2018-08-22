import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesComponent1DemoComponent } from './v6-templates-component1-demo.component';

describe('V6TemplatesComponent1DemoComponent', () => {
  let component: V6TemplatesComponent1DemoComponent;
  let fixture: ComponentFixture<V6TemplatesComponent1DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesComponent1DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesComponent1DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
