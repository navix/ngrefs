import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesPluralpipeDemoComponent } from './v6-templates-pluralpipe-demo.component';

describe('V6TemplatesPluralpipeDemoComponent', () => {
  let component: V6TemplatesPluralpipeDemoComponent;
  let fixture: ComponentFixture<V6TemplatesPluralpipeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesPluralpipeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesPluralpipeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
