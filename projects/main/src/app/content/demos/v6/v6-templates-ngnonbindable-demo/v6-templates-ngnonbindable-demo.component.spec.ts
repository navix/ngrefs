import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesNgnonbindableDemoComponent } from './v6-templates-ngnonbindable-demo.component';

describe('V6TemplatesNgnonbindableDemoComponent', () => {
  let component: V6TemplatesNgnonbindableDemoComponent;
  let fixture: ComponentFixture<V6TemplatesNgnonbindableDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesNgnonbindableDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesNgnonbindableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
