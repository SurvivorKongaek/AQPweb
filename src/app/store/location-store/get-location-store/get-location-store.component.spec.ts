import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLocationStoreComponent } from './get-location-store.component';

describe('GetLocationStoreComponent', () => {
  let component: GetLocationStoreComponent;
  let fixture: ComponentFixture<GetLocationStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetLocationStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetLocationStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
