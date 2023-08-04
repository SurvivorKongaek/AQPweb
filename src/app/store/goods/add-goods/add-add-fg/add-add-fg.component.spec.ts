import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAddFgComponent } from './add-add-fg.component';

describe('AddAddFgComponent', () => {
  let component: AddAddFgComponent;
  let fixture: ComponentFixture<AddAddFgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAddFgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAddFgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
