import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesNgcontent2DemoComponent } from './v6-templates-ngcontent2-demo.component';

describe('V6TemplatesNgcontent2DemoComponent', () => {
  let component: V6TemplatesNgcontent2DemoComponent;
  let fixture: ComponentFixture<V6TemplatesNgcontent2DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesNgcontent2DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesNgcontent2DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
