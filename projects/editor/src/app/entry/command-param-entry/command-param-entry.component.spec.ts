import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandParamEntryComponent } from './command-param-entry.component';

describe('EntryCommandParamComponent', () => {
  let component: CommandParamEntryComponent;
  let fixture: ComponentFixture<CommandParamEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandParamEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandParamEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
