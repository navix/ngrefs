import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesNgfor1DemoComponent } from './v6-templates-ngfor1-demo.component';

describe('V6TemplatesNgfor1DemoComponent', () => {
  let component: V6TemplatesNgfor1DemoComponent;
  let fixture: ComponentFixture<V6TemplatesNgfor1DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesNgfor1DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesNgfor1DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
