import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesNgcontent1DemoComponent } from './v6-templates-ngcontent1-demo.component';

describe('V6TemplatesNgcontent1DemoComponent', () => {
  let component: V6TemplatesNgcontent1DemoComponent;
  let fixture: ComponentFixture<V6TemplatesNgcontent1DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesNgcontent1DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesNgcontent1DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
