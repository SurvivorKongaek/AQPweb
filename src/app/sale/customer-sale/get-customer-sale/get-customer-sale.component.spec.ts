import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCustomerSaleComponent } from './get-customer-sale.component';

describe('GetCustomerSaleComponent', () => {
  let component: GetCustomerSaleComponent;
  let fixture: ComponentFixture<GetCustomerSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCustomerSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCustomerSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
