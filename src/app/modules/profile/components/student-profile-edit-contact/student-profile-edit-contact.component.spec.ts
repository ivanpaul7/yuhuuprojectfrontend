import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProfileEditContactComponent } from './student-profile-edit-contact.component';

describe('StudentProfileEditContactComponent', () => {
  let component: StudentProfileEditContactComponent;
  let fixture: ComponentFixture<StudentProfileEditContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentProfileEditContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentProfileEditContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
