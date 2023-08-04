import { TestBed } from '@angular/core/testing';

import { StockFgService } from './stock-fg.service';

describe('StockFgService', () => {
  let service: StockFgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockFgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
