import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProductTypeComponent } from './post-product-type.component';

describe('PostProductTypeComponent', () => {
  let component: PostProductTypeComponent;
  let fixture: ComponentFixture<PostProductTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostProductTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostProductTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
