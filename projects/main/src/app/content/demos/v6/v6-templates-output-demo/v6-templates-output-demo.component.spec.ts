import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesOutputDemoComponent } from './v6-templates-output-demo.component';

describe('V6TemplatesOutputDemoComponent', () => {
  let component: V6TemplatesOutputDemoComponent;
  let fixture: ComponentFixture<V6TemplatesOutputDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesOutputDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesOutputDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
