import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesNgif2DemoComponent } from './v6-templates-ngif2-demo.component';

describe('V6TemplatesNgif2DemoComponent', () => {
  let component: V6TemplatesNgif2DemoComponent;
  let fixture: ComponentFixture<V6TemplatesNgif2DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesNgif2DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesNgif2DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
