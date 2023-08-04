import { TestBed } from '@angular/core/testing';

import { CutFgService } from './cut-fg.service';

describe('CutFgService', () => {
  let service: CutFgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CutFgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
