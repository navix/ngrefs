import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6StylingHostbindingDemoComponent } from './v6-styling-hostbinding-demo.component';

describe('V6StylingHostbindingDemoComponent', () => {
  let component: V6StylingHostbindingDemoComponent;
  let fixture: ComponentFixture<V6StylingHostbindingDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6StylingHostbindingDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6StylingHostbindingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
