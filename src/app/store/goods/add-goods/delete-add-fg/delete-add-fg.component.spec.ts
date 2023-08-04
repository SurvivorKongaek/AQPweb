import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAddFgComponent } from './delete-add-fg.component';

describe('DeleteAddFgComponent', () => {
  let component: DeleteAddFgComponent;
  let fixture: ComponentFixture<DeleteAddFgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAddFgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAddFgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
