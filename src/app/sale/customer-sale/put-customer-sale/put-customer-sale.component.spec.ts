import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutCustomerSaleComponent } from './put-customer-sale.component';

describe('PutCustomerSaleComponent', () => {
  let component: PutCustomerSaleComponent;
  let fixture: ComponentFixture<PutCustomerSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutCustomerSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutCustomerSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
