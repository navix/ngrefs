import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesDatepipeDemoComponent } from './v6-templates-datepipe-demo.component';

describe('V6TemplatesDatepipeDemoComponent', () => {
  let component: V6TemplatesDatepipeDemoComponent;
  let fixture: ComponentFixture<V6TemplatesDatepipeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesDatepipeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesDatepipeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
