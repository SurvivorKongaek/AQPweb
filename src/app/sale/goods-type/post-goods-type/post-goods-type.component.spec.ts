import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostGoodsTypeComponent } from './post-goods-type.component';

describe('PostGoodsTypeComponent', () => {
  let component: PostGoodsTypeComponent;
  let fixture: ComponentFixture<PostGoodsTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostGoodsTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostGoodsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
