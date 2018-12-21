import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTest1 } from './dashboard-test1.component';

describe('DashboardTest1', () => {
  let component: DashboardTest1;
  let fixture: ComponentFixture<DashboardTest1>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTest1 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTest1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
