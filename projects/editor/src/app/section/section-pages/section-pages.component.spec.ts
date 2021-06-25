import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SectionPagesComponent } from './section-pages.component';

describe('SectionPagesComponent', () => {
  let component: SectionPagesComponent;
  let fixture: ComponentFixture<SectionPagesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
