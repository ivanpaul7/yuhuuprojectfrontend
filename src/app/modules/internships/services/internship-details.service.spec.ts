import { TestBed } from '@angular/core/testing';
import { AbstractInternshipDetailsService } from './internship-details.service';

describe('InternshipDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbstractInternshipDetailsService = TestBed.get(AbstractInternshipDetailsService);
    expect(service).toBeTruthy();
  });
});
