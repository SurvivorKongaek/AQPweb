import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockFgComponent } from './stock-fg.component';

describe('StockFgComponent', () => {
  let component: StockFgComponent;
  let fixture: ComponentFixture<StockFgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockFgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockFgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
