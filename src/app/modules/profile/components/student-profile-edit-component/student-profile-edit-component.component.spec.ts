import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StudentProfileEditComponentComponent} from './student-profile-edit-component.component';

describe('StudentProfileEditComponentComponent', () => {
  let component: StudentProfileEditComponentComponent;
  let fixture: ComponentFixture<StudentProfileEditComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StudentProfileEditComponentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentProfileEditComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
