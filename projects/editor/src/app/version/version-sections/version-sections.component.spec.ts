import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VersionSectionsComponent } from './version-sections.component';

describe('VersionSectionsComponent', () => {
  let component: VersionSectionsComponent;
  let fixture: ComponentFixture<VersionSectionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionSectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
