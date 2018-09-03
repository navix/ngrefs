import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesNgtemplate2DemoComponent } from './v6-templates-ngtemplate2-demo.component';

describe('V6TemplatesNgtemplate2DemoComponent', () => {
  let component: V6TemplatesNgtemplate2DemoComponent;
  let fixture: ComponentFixture<V6TemplatesNgtemplate2DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesNgtemplate2DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesNgtemplate2DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
