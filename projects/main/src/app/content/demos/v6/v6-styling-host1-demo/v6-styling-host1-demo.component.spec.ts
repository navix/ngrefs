import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6StylingHost1DemoComponent } from './v6-styling-host1-demo.component';

describe('V6StylingHost1DemoComponent', () => {
  let component: V6StylingHost1DemoComponent;
  let fixture: ComponentFixture<V6StylingHost1DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6StylingHost1DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6StylingHost1DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
