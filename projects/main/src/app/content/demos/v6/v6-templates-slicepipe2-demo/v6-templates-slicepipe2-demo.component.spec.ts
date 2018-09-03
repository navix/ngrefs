import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesSlicepipe2DemoComponent } from './v6-templates-slicepipe2-demo.component';

describe('V6TemplatesSlicepipe2DemoComponent', () => {
  let component: V6TemplatesSlicepipe2DemoComponent;
  let fixture: ComponentFixture<V6TemplatesSlicepipe2DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesSlicepipe2DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesSlicepipe2DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
