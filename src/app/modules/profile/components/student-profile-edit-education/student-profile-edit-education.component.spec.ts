import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProfileEditEducationComponent } from './student-profile-edit-education.component';

describe('StudentProfileEditEducationComponent', () => {
  let component: StudentProfileEditEducationComponent;
  let fixture: ComponentFixture<StudentProfileEditEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentProfileEditEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentProfileEditEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
