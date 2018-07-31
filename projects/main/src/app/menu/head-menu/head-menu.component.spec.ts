import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadMenuComponent } from './head-menu.component';

describe('HeadMenuComponent', () => {
  let component: HeadMenuComponent;
  let fixture: ComponentFixture<HeadMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
