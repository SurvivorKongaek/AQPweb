import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutLocationStoreComponent } from './put-location-store.component';

describe('PutLocationStoreComponent', () => {
  let component: PutLocationStoreComponent;
  let fixture: ComponentFixture<PutLocationStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutLocationStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutLocationStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
