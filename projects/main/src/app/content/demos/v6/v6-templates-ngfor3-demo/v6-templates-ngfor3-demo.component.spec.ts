import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesNgfor3DemoComponent } from './v6-templates-ngfor3-demo.component';

describe('V6TemplatesNgfor3DemoComponent', () => {
  let component: V6TemplatesNgfor3DemoComponent;
  let fixture: ComponentFixture<V6TemplatesNgfor3DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesNgfor3DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesNgfor3DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
