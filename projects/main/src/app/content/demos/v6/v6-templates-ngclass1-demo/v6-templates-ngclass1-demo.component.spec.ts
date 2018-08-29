import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesNgclass1DemoComponent } from './v6-templates-ngclass1-demo.component';

describe('V6TemplatesNgclass1DemoComponent', () => {
  let component: V6TemplatesNgclass1DemoComponent;
  let fixture: ComponentFixture<V6TemplatesNgclass1DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesNgclass1DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesNgclass1DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
