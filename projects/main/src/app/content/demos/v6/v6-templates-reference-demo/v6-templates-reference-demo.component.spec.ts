import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesReferenceDemoComponent } from './v6-templates-reference-demo.component';

describe('V6TemplatesReferenceDemoComponent', () => {
  let component: V6TemplatesReferenceDemoComponent;
  let fixture: ComponentFixture<V6TemplatesReferenceDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesReferenceDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesReferenceDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
