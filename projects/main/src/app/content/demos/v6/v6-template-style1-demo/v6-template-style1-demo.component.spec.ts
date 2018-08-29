import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplateStyle1DemoComponent } from './v6-template-style1-demo.component';

describe('V6TemplateStyle1DemoComponent', () => {
  let component: V6TemplateStyle1DemoComponent;
  let fixture: ComponentFixture<V6TemplateStyle1DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplateStyle1DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplateStyle1DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
