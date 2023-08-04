import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCutFgComponent } from './add-cut-fg.component';

describe('AddCutFgComponent', () => {
  let component: AddCutFgComponent;
  let fixture: ComponentFixture<AddCutFgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCutFgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCutFgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
