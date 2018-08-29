import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesClass2DemoComponent } from './v6-templates-class2-demo.component';

describe('V6TemplatesClass2DemoComponent', () => {
  let component: V6TemplatesClass2DemoComponent;
  let fixture: ComponentFixture<V6TemplatesClass2DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesClass2DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesClass2DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
