import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryTextComponent } from './entry-text.component';

describe('EntryTextComponent', () => {
  let component: EntryTextComponent;
  let fixture: ComponentFixture<EntryTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
