import { TestBed } from '@angular/core/testing';

import { TwilioAuthService } from './twilio-auth.service';

describe('TwilioAuthService', () => {
  let service: TwilioAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwilioAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
