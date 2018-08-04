import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageTranslationComponent } from './message-translation.component';

describe('MessageTranslationComponent', () => {
  let component: MessageTranslationComponent;
  let fixture: ComponentFixture<MessageTranslationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageTranslationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageTranslationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
