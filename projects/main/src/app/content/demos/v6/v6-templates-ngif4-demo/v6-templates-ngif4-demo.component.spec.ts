import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesNgif4DemoComponent } from './v6-templates-ngif4-demo.component';

describe('V6TemplatesNgif4DemoComponent', () => {
  let component: V6TemplatesNgif4DemoComponent;
  let fixture: ComponentFixture<V6TemplatesNgif4DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesNgif4DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesNgif4DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
