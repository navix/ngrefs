import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesNumberpipeDemoComponent } from './v6-templates-numberpipe-demo.component';

describe('V6TemplatesNumberpipeDemoComponent', () => {
  let component: V6TemplatesNumberpipeDemoComponent;
  let fixture: ComponentFixture<V6TemplatesNumberpipeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesNumberpipeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesNumberpipeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
