import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesCustompipeDemoComponent } from './v6-templates-custompipe-demo.component';

describe('V6TemplatesCustompipeDemoComponent', () => {
  let component: V6TemplatesCustompipeDemoComponent;
  let fixture: ComponentFixture<V6TemplatesCustompipeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesCustompipeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesCustompipeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
