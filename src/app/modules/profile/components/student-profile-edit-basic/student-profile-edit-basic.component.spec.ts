import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProfileEditBasicComponent } from './student-profile-edit-basic.component';

describe('StudentProfileEditBasicComponent', () => {
  let component: StudentProfileEditBasicComponent;
  let fixture: ComponentFixture<StudentProfileEditBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentProfileEditBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentProfileEditBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
