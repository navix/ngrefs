import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V6TemplatesAsyncpipeDemoComponent } from './v6-templates-asyncpipe-demo.component';

describe('V6TemplatesAsyncpipeDemoComponent', () => {
  let component: V6TemplatesAsyncpipeDemoComponent;
  let fixture: ComponentFixture<V6TemplatesAsyncpipeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V6TemplatesAsyncpipeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V6TemplatesAsyncpipeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
