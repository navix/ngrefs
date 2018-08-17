import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceOptionEntryComponent } from './interface-option-entry.component';

describe('InterfaceOptionEntryComponent', () => {
  let component: InterfaceOptionEntryComponent;
  let fixture: ComponentFixture<InterfaceOptionEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceOptionEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceOptionEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
