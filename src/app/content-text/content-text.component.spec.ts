import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTextComponent } from './content-text.component';

describe('ContentTextComponent', () => {
  let component: ContentTextComponent;
  let fixture: ComponentFixture<ContentTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
