import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutGoodsTypeComponent } from './put-goods-type.component';

describe('PutGoodsTypeComponent', () => {
  let component: PutGoodsTypeComponent;
  let fixture: ComponentFixture<PutGoodsTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutGoodsTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutGoodsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
