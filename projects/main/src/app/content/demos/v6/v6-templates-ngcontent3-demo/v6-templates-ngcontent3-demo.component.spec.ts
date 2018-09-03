import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesNgcontent3DemoComponent } from './v6-templates-ngcontent3-demo.component';

describe('V6TemplatesNgcontent3DemoComponent', () => {
  let component: V6TemplatesNgcontent3DemoComponent;
  let fixture: ComponentFixture<V6TemplatesNgcontent3DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesNgcontent3DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesNgcontent3DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
