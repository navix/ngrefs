import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TocEntryComponent } from './toc-entry.component';

describe('TocEntryComponent', () => {
  let component: TocEntryComponent;
  let fixture: ComponentFixture<TocEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TocEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TocEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
