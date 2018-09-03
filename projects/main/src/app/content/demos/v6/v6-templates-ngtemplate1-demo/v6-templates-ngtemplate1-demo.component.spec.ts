import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesNgtemplate1DemoComponent } from './v6-templates-ngtemplate1-demo.component';

describe('V6TemplatesNgtemplate1DemoComponent', () => {
  let component: V6TemplatesNgtemplate1DemoComponent;
  let fixture: ComponentFixture<V6TemplatesNgtemplate1DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesNgtemplate1DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesNgtemplate1DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
