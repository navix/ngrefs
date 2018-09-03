import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesPercentpipeDemoComponent } from './v6-templates-percentpipe-demo.component';

describe('V6TemplatesPercentpipeDemoComponent', () => {
  let component: V6TemplatesPercentpipeDemoComponent;
  let fixture: ComponentFixture<V6TemplatesPercentpipeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesPercentpipeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesPercentpipeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
