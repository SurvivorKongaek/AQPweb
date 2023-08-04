import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsSaleComponent } from './goods-sale.component';

describe('GoodsSaleComponent', () => {
  let component: GoodsSaleComponent;
  let fixture: ComponentFixture<GoodsSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodsSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodsSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
