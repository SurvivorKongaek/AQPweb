import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetGoodsComponent } from './get-goods.component';

describe('GetGoodsComponent', () => {
  let component: GetGoodsComponent;
  let fixture: ComponentFixture<GetGoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetGoodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
