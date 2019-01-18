import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipsListForApplicantComponent } from './internships-list-for-applicant.component';

describe('InternshipsListForApplicantComponent', () => {
  let component: InternshipsListForApplicantComponent;
  let fixture: ComponentFixture<InternshipsListForApplicantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternshipsListForApplicantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternshipsListForApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
