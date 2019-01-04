import {TestBed} from '@angular/core/testing';

import {AbstractStudentProfileService} from './student-profile.service';

describe('StudentProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbstractStudentProfileService = TestBed.get(AbstractStudentProfileService);
    expect(service).toBeTruthy();
  });
});
