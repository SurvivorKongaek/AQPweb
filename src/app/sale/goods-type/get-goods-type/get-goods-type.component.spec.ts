import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetGoodsTypeComponent } from './get-goods-type.component';

describe('GetGoodsTypeComponent', () => {
  let component: GetGoodsTypeComponent;
  let fixture: ComponentFixture<GetGoodsTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetGoodsTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetGoodsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
