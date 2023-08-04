import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutGoodeSaleComponent } from './put-goode-sale.component';

describe('PutGoodeSaleComponent', () => {
  let component: PutGoodeSaleComponent;
  let fixture: ComponentFixture<PutGoodeSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutGoodeSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutGoodeSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
