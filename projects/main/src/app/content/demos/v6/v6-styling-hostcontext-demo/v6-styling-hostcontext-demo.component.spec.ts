import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6StylingHostcontextDemoComponent } from './v6-styling-hostcontext-demo.component';

describe('V6StylingHostcontextDemoComponent', () => {
  let component: V6StylingHostcontextDemoComponent;
  let fixture: ComponentFixture<V6StylingHostcontextDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6StylingHostcontextDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6StylingHostcontextDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
