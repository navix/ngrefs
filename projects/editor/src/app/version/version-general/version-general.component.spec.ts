import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VersionGeneralComponent } from './version-general.component';

describe('VersionGeneralComponent', () => {
  let component: VersionGeneralComponent;
  let fixture: ComponentFixture<VersionGeneralComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
