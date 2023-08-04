import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGoodeSaleComponent } from './delete-goode-sale.component';

describe('DeleteGoodeSaleComponent', () => {
  let component: DeleteGoodeSaleComponent;
  let fixture: ComponentFixture<DeleteGoodeSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteGoodeSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteGoodeSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
