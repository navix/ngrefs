import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesUppercasepipeDemoComponent } from './v6-templates-uppercasepipe-demo.component';

describe('V6TemplatesUppercasepipeDemoComponent', () => {
  let component: V6TemplatesUppercasepipeDemoComponent;
  let fixture: ComponentFixture<V6TemplatesUppercasepipeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesUppercasepipeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesUppercasepipeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
