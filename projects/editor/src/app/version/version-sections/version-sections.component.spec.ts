import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionSectionsComponent } from './version-sections.component';

describe('VersionSectionsComponent', () => {
  let component: VersionSectionsComponent;
  let fixture: ComponentFixture<VersionSectionsComponent>;

  beforeEach(async(() => {
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
