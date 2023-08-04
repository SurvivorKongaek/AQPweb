import { TestBed } from '@angular/core/testing';

import { ProductTypeSaleService } from './product-type-sale.service';

describe('ProductTypeSaleService', () => {
  let service: ProductTypeSaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductTypeSaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
