import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateSaleComponent } from './calculate-sale.component';

describe('CalculateSaleComponent', () => {
  let component: CalculateSaleComponent;
  let fixture: ComponentFixture<CalculateSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculateSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
