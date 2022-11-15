import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutCustomerComponent } from './put-customer.component';

describe('PutCustomerComponent', () => {
  let component: PutCustomerComponent;
  let fixture: ComponentFixture<PutCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
