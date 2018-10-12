import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6StylingHost2DemoComponent } from './v6-styling-host2-demo.component';

describe('V6StylingHost2DemoComponent', () => {
  let component: V6StylingHost2DemoComponent;
  let fixture: ComponentFixture<V6StylingHost2DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6StylingHost2DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6StylingHost2DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
