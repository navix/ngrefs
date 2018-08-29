import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesPseudoEventsDemoComponent } from './v6-templates-pseudo-events-demo.component';

describe('V6TemplatesPseudoEventsDemoComponent', () => {
  let component: V6TemplatesPseudoEventsDemoComponent;
  let fixture: ComponentFixture<V6TemplatesPseudoEventsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesPseudoEventsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesPseudoEventsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
