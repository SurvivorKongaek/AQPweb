import { TestBed } from '@angular/core/testing';

import { QuotatioServiceService } from './quotatio-service.service';

describe('QuotatioServiceService', () => {
  let service: QuotatioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuotatioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
