import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantsManagementComponent } from './applicants-management.component';

describe('ApplicantsManagementComponent', () => {
  let component: ApplicantsManagementComponent;
  let fixture: ComponentFixture<ApplicantsManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantsManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
