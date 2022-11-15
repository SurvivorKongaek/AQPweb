import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutRawMaterialComponent } from './put-raw-material.component';

describe('PutRawMaterialComponent', () => {
  let component: PutRawMaterialComponent;
  let fixture: ComponentFixture<PutRawMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutRawMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutRawMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
