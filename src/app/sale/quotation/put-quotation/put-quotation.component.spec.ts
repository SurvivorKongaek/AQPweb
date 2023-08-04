import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutQuotationComponent } from './put-quotation.component';

describe('PutQuotationComponent', () => {
  let component: PutQuotationComponent;
  let fixture: ComponentFixture<PutQuotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutQuotationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
