import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationStoreComponent } from './location-store.component';

describe('LocationStoreComponent', () => {
  let component: LocationStoreComponent;
  let fixture: ComponentFixture<LocationStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
