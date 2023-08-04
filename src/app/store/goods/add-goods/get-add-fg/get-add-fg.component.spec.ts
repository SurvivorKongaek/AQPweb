import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAddFgComponent } from './get-add-fg.component';

describe('GetAddFgComponent', () => {
  let component: GetAddFgComponent;
  let fixture: ComponentFixture<GetAddFgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAddFgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAddFgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
