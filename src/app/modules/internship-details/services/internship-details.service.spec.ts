import { TestBed } from '@angular/core/testing';

import { InternshipDetailsService } from './internship-details.service';

describe('InternshipDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InternshipDetailsService = TestBed.get(InternshipDetailsService);
    expect(service).toBeTruthy();
  });
});
