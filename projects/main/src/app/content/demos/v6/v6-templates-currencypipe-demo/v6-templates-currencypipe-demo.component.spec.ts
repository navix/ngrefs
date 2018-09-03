import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesCurrencypipeDemoComponent } from './v6-templates-currencypipe-demo.component';

describe('V6TemplatesCurrencypipeDemoComponent', () => {
  let component: V6TemplatesCurrencypipeDemoComponent;
  let fixture: ComponentFixture<V6TemplatesCurrencypipeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesCurrencypipeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesCurrencypipeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
