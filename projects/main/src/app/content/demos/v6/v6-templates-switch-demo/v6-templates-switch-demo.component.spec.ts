import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesSwitchDemoComponent } from './v6-templates-switch-demo.component';

describe('V6TemplatesSwitchDemoComponent', () => {
  let component: V6TemplatesSwitchDemoComponent;
  let fixture: ComponentFixture<V6TemplatesSwitchDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesSwitchDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesSwitchDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
