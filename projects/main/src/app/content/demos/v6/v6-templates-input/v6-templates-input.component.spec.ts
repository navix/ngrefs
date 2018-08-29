import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesInputComponent } from './v6-templates-input.component';

describe('V6TemplatesInputComponent', () => {
  let component: V6TemplatesInputComponent;
  let fixture: ComponentFixture<V6TemplatesInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
