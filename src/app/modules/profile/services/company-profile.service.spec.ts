import {TestBed} from '@angular/core/testing';

import {AbstractCompanyProfileService} from './company-profile.service';

describe('CompanyProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbstractCompanyProfileService = TestBed.get(AbstractCompanyProfileService);
    expect(service).toBeTruthy();
  });
});
