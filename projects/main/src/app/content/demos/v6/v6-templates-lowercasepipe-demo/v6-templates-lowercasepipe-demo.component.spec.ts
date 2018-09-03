import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesLowercasepipeDemoComponent } from './v6-templates-lowercasepipe-demo.component';

describe('V6TemplatesLowercasepipeDemoComponent', () => {
  let component: V6TemplatesLowercasepipeDemoComponent;
  let fixture: ComponentFixture<V6TemplatesLowercasepipeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesLowercasepipeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesLowercasepipeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
