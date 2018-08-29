import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesNgstyleDemoComponent } from './v6-templates-ngstyle-demo.component';

describe('V6TemplatesNgstyleDemoComponent', () => {
  let component: V6TemplatesNgstyleDemoComponent;
  let fixture: ComponentFixture<V6TemplatesNgstyleDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesNgstyleDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesNgstyleDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
