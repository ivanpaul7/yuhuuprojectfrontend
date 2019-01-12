import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardTest1Component} from './dashboard-test1.component';

describe('DashboardTest1Component', () => {
  let component: DashboardTest1Component;
  let fixture: ComponentFixture<DashboardTest1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardTest1Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
