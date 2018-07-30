import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HintEntryComponent } from './hint-entry.component';

describe('HintEntryComponent', () => {
  let component: HintEntryComponent;
  let fixture: ComponentFixture<HintEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HintEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HintEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
