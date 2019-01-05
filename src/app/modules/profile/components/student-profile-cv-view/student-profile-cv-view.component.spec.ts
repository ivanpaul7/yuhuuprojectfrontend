import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProfileCvViewComponent } from './student-profile-cv-view.component';

describe('StudentProfileCvViewComponent', () => {
  let component: StudentProfileCvViewComponent;
  let fixture: ComponentFixture<StudentProfileCvViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentProfileCvViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentProfileCvViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
