import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetGoodeSaleComponent } from './get-goode-sale.component';

describe('GetGoodeSaleComponent', () => {
  let component: GetGoodeSaleComponent;
  let fixture: ComponentFixture<GetGoodeSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetGoodeSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetGoodeSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
