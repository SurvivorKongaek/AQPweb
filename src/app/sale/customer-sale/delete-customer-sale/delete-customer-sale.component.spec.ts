import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCustomerSaleComponent } from './delete-customer-sale.component';

describe('DeleteCustomerSaleComponent', () => {
  let component: DeleteCustomerSaleComponent;
  let fixture: ComponentFixture<DeleteCustomerSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCustomerSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCustomerSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
