import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesNgif3DemoComponent } from './v6-templates-ngif3-demo.component';

describe('V6TemplatesNgif3DemoComponent', () => {
  let component: V6TemplatesNgif3DemoComponent;
  let fixture: ComponentFixture<V6TemplatesNgif3DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesNgif3DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesNgif3DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
