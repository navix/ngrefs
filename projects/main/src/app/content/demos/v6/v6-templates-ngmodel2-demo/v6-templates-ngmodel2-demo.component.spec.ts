import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesNgmodel2DemoComponent } from './v6-templates-ngmodel2-demo.component';

describe('V6TemplatesNgmodel2DemoComponent', () => {
  let component: V6TemplatesNgmodel2DemoComponent;
  let fixture: ComponentFixture<V6TemplatesNgmodel2DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesNgmodel2DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesNgmodel2DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
