import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProfileEditSkillsComponent } from './student-profile-edit-skills.component';

describe('StudentProfileEditSkillsComponent', () => {
  let component: StudentProfileEditSkillsComponent;
  let fixture: ComponentFixture<StudentProfileEditSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentProfileEditSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentProfileEditSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
