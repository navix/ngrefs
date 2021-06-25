import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VersionsListComponent } from './versions-list.component';

describe('VersionsListComponent', () => {
  let component: VersionsListComponent;
  let fixture: ComponentFixture<VersionsListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
