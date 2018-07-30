import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTutorialsEntryComponent } from './page-tutorials-entry.component';

describe('PageTutorialsEntryComponent', () => {
  let component: PageTutorialsEntryComponent;
  let fixture: ComponentFixture<PageTutorialsEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTutorialsEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTutorialsEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
