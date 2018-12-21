import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardTest2Component} from './dashboard-test2.component';

describe('DashboardTest2Component', () => {
  let component: DashboardTest2Component;
  let fixture: ComponentFixture<DashboardTest2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardTest2Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
