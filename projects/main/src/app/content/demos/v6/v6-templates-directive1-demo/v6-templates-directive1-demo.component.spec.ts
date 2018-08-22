import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesDirective1DemoComponent } from './v6-templates-directive1-demo.component';

describe('V6TemplatesDirective1DemoComponent', () => {
  let component: V6TemplatesDirective1DemoComponent;
  let fixture: ComponentFixture<V6TemplatesDirective1DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesDirective1DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesDirective1DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
