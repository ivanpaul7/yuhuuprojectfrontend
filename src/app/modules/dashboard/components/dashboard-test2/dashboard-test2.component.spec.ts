import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTest2 } from './dashboard-test2.component';

describe('DashboardTest2', () => {
  let component: DashboardTest2;
  let fixture: ComponentFixture<DashboardTest2>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTest2 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTest2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
