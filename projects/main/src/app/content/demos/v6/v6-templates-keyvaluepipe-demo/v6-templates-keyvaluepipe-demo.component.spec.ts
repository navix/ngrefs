import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesKeyvaluepipeDemoComponent } from './v6-templates-keyvaluepipe-demo.component';

describe('V6TemplatesKeyvaluepipeDemoComponent', () => {
  let component: V6TemplatesKeyvaluepipeDemoComponent;
  let fixture: ComponentFixture<V6TemplatesKeyvaluepipeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesKeyvaluepipeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesKeyvaluepipeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
