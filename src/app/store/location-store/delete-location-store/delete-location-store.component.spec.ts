import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLocationStoreComponent } from './delete-location-store.component';

describe('DeleteLocationStoreComponent', () => {
  let component: DeleteLocationStoreComponent;
  let fixture: ComponentFixture<DeleteLocationStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteLocationStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteLocationStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
