import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialsEntryComponent } from './tutorials-entry.component';

describe('TutorialsEntryComponent', () => {
  let component: TutorialsEntryComponent;
  let fixture: ComponentFixture<TutorialsEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialsEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialsEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
