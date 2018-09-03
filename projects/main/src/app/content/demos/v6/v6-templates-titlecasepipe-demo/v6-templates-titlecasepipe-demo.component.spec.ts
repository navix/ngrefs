import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesTitlecasepipeDemoComponent } from './v6-templates-titlecasepipe-demo.component';

describe('V6TemplatesTitlecasepipeDemoComponent', () => {
  let component: V6TemplatesTitlecasepipeDemoComponent;
  let fixture: ComponentFixture<V6TemplatesTitlecasepipeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesTitlecasepipeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesTitlecasepipeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
