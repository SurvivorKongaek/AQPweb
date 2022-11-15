import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGoodsTypeComponent } from './delete-goods-type.component';

describe('DeleteGoodsTypeComponent', () => {
  let component: DeleteGoodsTypeComponent;
  let fixture: ComponentFixture<DeleteGoodsTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteGoodsTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteGoodsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
