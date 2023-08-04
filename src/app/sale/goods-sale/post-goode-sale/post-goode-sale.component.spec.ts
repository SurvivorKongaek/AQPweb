import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostGoodeSaleComponent } from './post-goode-sale.component';

describe('PostGoodeSaleComponent', () => {
  let component: PostGoodeSaleComponent;
  let fixture: ComponentFixture<PostGoodeSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostGoodeSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostGoodeSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
