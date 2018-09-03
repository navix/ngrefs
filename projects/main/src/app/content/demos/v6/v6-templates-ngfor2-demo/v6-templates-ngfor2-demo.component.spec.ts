import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesNgfor2DemoComponent } from './v6-templates-ngfor2-demo.component';

describe('V6TemplatesNgfor2DemoComponent', () => {
  let component: V6TemplatesNgfor2DemoComponent;
  let fixture: ComponentFixture<V6TemplatesNgfor2DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesNgfor2DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesNgfor2DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
