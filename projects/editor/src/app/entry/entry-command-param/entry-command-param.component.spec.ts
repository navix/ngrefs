import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryCommandParamComponent } from './entry-command-param.component';

describe('EntryCommandParamComponent', () => {
  let component: EntryCommandParamComponent;
  let fixture: ComponentFixture<EntryCommandParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryCommandParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryCommandParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
