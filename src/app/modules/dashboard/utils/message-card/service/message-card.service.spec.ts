import { TestBed } from '@angular/core/testing';

import { MessageCardService } from './message-card.service';

describe('MessageCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageCardService = TestBed.get(MessageCardService);
    expect(service).toBeTruthy();
  });
});
