import {TestBed} from '@angular/core/testing';

import {AbstractRegisterService} from './register.service';

describe('RegisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbstractRegisterService = TestBed.get(AbstractRegisterService);
    expect(service).toBeTruthy();
  });
});
