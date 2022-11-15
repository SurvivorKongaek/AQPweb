import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLocationStoreComponent } from './post-location-store.component';

describe('PostLocationStoreComponent', () => {
  let component: PostLocationStoreComponent;
  let fixture: ComponentFixture<PostLocationStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostLocationStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostLocationStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
