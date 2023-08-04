import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostQuotationComponent } from './post-quotation.component';

describe('PostQuotationComponent', () => {
  let component: PostQuotationComponent;
  let fixture: ComponentFixture<PostQuotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostQuotationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
