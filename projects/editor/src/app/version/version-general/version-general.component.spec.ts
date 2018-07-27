import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionGeneralComponent } from './version-general.component';

describe('VersionGeneralComponent', () => {
  let component: VersionGeneralComponent;
  let fixture: ComponentFixture<VersionGeneralComponent>;

  beforeEach(async(() => {
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
