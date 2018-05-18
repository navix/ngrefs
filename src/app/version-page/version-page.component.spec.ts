import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionPageComponent } from './version-page.component';

describe('VersionPageComponent', () => {
  let component: VersionPageComponent;
  let fixture: ComponentFixture<VersionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
