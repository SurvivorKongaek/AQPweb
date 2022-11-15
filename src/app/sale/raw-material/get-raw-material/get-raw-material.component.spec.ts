import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRawMaterialComponent } from './get-raw-material.component';

describe('GetRawMaterialComponent', () => {
  let component: GetRawMaterialComponent;
  let fixture: ComponentFixture<GetRawMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetRawMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetRawMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
