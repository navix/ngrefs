import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesTwoWayDemoComponent } from './v6-templates-two-way-demo.component';

describe('V6TemplatesTwoWayDemoComponent', () => {
  let component: V6TemplatesTwoWayDemoComponent;
  let fixture: ComponentFixture<V6TemplatesTwoWayDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesTwoWayDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesTwoWayDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
