import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCommandParamEntryComponent } from './page-command-param-entry.component';

describe('PageCommandParamEntryComponent', () => {
  let component: PageCommandParamEntryComponent;
  let fixture: ComponentFixture<PageCommandParamEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCommandParamEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCommandParamEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
