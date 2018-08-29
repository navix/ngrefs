import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesNgclass2DemoComponent } from './v6-templates-ngclass2-demo.component';

describe('V6TemplatesNgclass2DemoComponent', () => {
  let component: V6TemplatesNgclass2DemoComponent;
  let fixture: ComponentFixture<V6TemplatesNgclass2DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesNgclass2DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesNgclass2DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
