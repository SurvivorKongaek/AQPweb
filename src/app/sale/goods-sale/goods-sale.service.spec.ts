import { TestBed } from '@angular/core/testing';

import { GoodsSaleService } from './goods-sale.service';

describe('GoodsSaleService', () => {
  let service: GoodsSaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoodsSaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
