import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutAddFgComponent } from './put-add-fg.component';

describe('PutAddFgComponent', () => {
  let component: PutAddFgComponent;
  let fixture: ComponentFixture<PutAddFgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutAddFgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutAddFgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
