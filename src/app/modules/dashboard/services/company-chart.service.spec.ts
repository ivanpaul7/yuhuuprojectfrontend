import { TestBed } from '@angular/core/testing';

import { CompanyChartService } from './company-chart.service';

describe('CompanyChartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanyChartService = TestBed.get(CompanyChartService);
    expect(service).toBeTruthy();
  });
});
