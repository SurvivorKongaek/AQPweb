import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutProductTypeComponent } from './put-product-type.component';

describe('PutProductTypeComponent', () => {
  let component: PutProductTypeComponent;
  let fixture: ComponentFixture<PutProductTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutProductTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutProductTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
