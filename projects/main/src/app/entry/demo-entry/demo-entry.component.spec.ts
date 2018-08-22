import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoEntryComponent } from './demo-entry.component';

describe('DemoEntryComponent', () => {
  let component: DemoEntryComponent;
  let fixture: ComponentFixture<DemoEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
