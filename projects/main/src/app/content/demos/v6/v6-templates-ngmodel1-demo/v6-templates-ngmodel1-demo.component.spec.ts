import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesNgmodel1DemoComponent } from './v6-templates-ngmodel1-demo.component';

describe('V6TemplatesNgmodel1DemoComponent', () => {
  let component: V6TemplatesNgmodel1DemoComponent;
  let fixture: ComponentFixture<V6TemplatesNgmodel1DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesNgmodel1DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesNgmodel1DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
