import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutGoodsComponent } from './cut-goods.component';

describe('CutGoodsComponent', () => {
  let component: CutGoodsComponent;
  let fixture: ComponentFixture<CutGoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CutGoodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CutGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
