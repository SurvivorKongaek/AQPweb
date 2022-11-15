import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutGoodsComponent } from './put-goods.component';

describe('PutGoodsComponent', () => {
  let component: PutGoodsComponent;
  let fixture: ComponentFixture<PutGoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutGoodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
