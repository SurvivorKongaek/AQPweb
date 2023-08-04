import { TestBed } from '@angular/core/testing';

import { AddFgService } from './add-fg.service';

describe('AddFgService', () => {
  let service: AddFgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddFgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
