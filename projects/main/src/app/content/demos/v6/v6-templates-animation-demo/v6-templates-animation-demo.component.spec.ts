import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesAnimationDemoComponent } from './v6-templates-animation-demo.component';

describe('V6TemplatesAnimationDemoComponent', () => {
  let component: V6TemplatesAnimationDemoComponent;
  let fixture: ComponentFixture<V6TemplatesAnimationDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesAnimationDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesAnimationDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
