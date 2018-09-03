import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesNgpluralDemoComponent } from './v6-templates-ngplural-demo.component';

describe('V6TemplatesNgpluralDemoComponent', () => {
  let component: V6TemplatesNgpluralDemoComponent;
  let fixture: ComponentFixture<V6TemplatesNgpluralDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesNgpluralDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesNgpluralDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
