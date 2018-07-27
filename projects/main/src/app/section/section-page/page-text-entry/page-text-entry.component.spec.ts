import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTextEntryComponent } from './page-text-entry.component';

describe('PageTextEntryComponent', () => {
  let component: PageTextEntryComponent;
  let fixture: ComponentFixture<PageTextEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTextEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTextEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
