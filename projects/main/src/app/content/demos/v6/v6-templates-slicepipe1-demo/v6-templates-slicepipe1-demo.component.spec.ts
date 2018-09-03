import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesSlicepipe1DemoComponent } from './v6-templates-slicepipe1-demo.component';

describe('V6TemplatesSlicepipe1DemoComponent', () => {
  let component: V6TemplatesSlicepipe1DemoComponent;
  let fixture: ComponentFixture<V6TemplatesSlicepipe1DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesSlicepipe1DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesSlicepipe1DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
