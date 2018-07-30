import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHintEntryComponent } from './page-hint-entry.component';

describe('PageHintEntryComponent', () => {
  let component: PageHintEntryComponent;
  let fixture: ComponentFixture<PageHintEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHintEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHintEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
