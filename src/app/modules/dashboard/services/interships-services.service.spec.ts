import { TestBed } from '@angular/core/testing';

import { IntershipsServicesService } from './interships-services.service';

describe('IntershipsServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntershipsServicesService = TestBed.get(IntershipsServicesService);
    expect(service).toBeTruthy();
  });
});
