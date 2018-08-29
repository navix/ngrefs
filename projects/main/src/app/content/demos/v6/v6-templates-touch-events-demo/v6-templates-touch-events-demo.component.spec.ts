import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesTouchEventsDemoComponent } from './v6-templates-touch-events-demo.component';

describe('V6TemplatesTouchEventsDemoComponent', () => {
  let component: V6TemplatesTouchEventsDemoComponent;
  let fixture: ComponentFixture<V6TemplatesTouchEventsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesTouchEventsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesTouchEventsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
