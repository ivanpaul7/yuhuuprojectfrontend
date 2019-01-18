import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipEditRequirementComponent } from './internship-edit-requirement.component';

describe('InternshipEditRequirementComponent', () => {
  let component: InternshipEditRequirementComponent;
  let fixture: ComponentFixture<InternshipEditRequirementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternshipEditRequirementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternshipEditRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
