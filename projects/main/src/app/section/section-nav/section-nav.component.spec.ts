import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionNavComponent } from './section-nav.component';

describe('SectionMenuComponent', () => {
  let component: SectionNavComponent;
  let fixture: ComponentFixture<SectionNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
