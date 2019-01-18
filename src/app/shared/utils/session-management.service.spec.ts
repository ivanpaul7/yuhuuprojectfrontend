import { TestBed } from '@angular/core/testing';

import { SessionManagementService } from './session-management.service';

describe('SessionManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SessionManagementService = TestBed.get(SessionManagementService);
    expect(service).toBeTruthy();
  });
});
