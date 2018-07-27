import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHolderComponent } from './section-holder.component';

describe('SectionHolderComponent', () => {
  let component: SectionHolderComponent;
  let fixture: ComponentFixture<SectionHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
