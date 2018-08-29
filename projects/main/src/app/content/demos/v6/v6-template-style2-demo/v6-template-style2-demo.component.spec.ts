import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplateStyle2DemoComponent } from './v6-template-style2-demo.component';

describe('V6TemplateStyle2DemoComponent', () => {
  let component: V6TemplateStyle2DemoComponent;
  let fixture: ComponentFixture<V6TemplateStyle2DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplateStyle2DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplateStyle2DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
