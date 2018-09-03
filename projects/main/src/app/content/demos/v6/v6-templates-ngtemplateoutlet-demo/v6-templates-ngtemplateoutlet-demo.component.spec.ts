import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesNgtemplateoutletDemoComponent } from './v6-templates-ngtemplateoutlet-demo.component';

describe('V6TemplatesNgtemplateoutletDemoComponent', () => {
  let component: V6TemplatesNgtemplateoutletDemoComponent;
  let fixture: ComponentFixture<V6TemplatesNgtemplateoutletDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesNgtemplateoutletDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesNgtemplateoutletDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
