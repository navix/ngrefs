import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesNgif1DemoComponent } from './v6-templates-ngif1-demo.component';

describe('V6TemplatesNgif1DemoComponent', () => {
  let component: V6TemplatesNgif1DemoComponent;
  let fixture: ComponentFixture<V6TemplatesNgif1DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesNgif1DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesNgif1DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
