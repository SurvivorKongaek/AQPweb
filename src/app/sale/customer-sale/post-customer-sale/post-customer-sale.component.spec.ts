import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCustomerSaleComponent } from './post-customer-sale.component';

describe('PostCustomerSaleComponent', () => {
  let component: PostCustomerSaleComponent;
  let fixture: ComponentFixture<PostCustomerSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCustomerSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCustomerSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
