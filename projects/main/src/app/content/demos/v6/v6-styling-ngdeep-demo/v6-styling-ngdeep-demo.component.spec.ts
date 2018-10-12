import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6StylingNgdeepDemoComponent } from './v6-styling-ngdeep-demo.component';

describe('V6StylingNgdeepDemoComponent', () => {
  let component: V6StylingNgdeepDemoComponent;
  let fixture: ComponentFixture<V6StylingNgdeepDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6StylingNgdeepDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6StylingNgdeepDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
