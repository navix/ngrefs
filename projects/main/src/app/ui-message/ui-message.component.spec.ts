import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiMessageComponent } from './ui-message.component';

describe('UiMessageComponent', () => {
  let component: UiMessageComponent;
  let fixture: ComponentFixture<UiMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
