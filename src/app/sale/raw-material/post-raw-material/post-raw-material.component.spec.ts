import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRawMaterialComponent } from './post-raw-material.component';

describe('PostRawMaterialComponent', () => {
  let component: PostRawMaterialComponent;
  let fixture: ComponentFixture<PostRawMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostRawMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostRawMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
