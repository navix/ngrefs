import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesNgclass3DemoComponent } from './v6-templates-ngclass3-demo.component';

describe('V6TemplatesNgclass3DemoComponent', () => {
  let component: V6TemplatesNgclass3DemoComponent;
  let fixture: ComponentFixture<V6TemplatesNgclass3DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesNgclass3DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesNgclass3DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
