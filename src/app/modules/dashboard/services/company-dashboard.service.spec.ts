import { TestBed } from '@angular/core/testing';

import { CompanyDashboardService } from './company-dashboard.service';

describe('CompanyDashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanyDashboardService = TestBed.get(CompanyDashboardService);
    expect(service).toBeTruthy();
  });
});
