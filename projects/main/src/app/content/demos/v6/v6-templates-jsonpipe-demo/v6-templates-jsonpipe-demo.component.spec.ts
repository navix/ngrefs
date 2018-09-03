import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesJsonpipeDemoComponent } from './v6-templates-jsonpipe-demo.component';

describe('V6TemplatesJsonpipeDemoComponent', () => {
  let component: V6TemplatesJsonpipeDemoComponent;
  let fixture: ComponentFixture<V6TemplatesJsonpipeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesJsonpipeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesJsonpipeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
