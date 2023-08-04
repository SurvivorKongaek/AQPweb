import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCutFgComponent } from './delete-cut-fg.component';

describe('DeleteCutFgComponent', () => {
  let component: DeleteCutFgComponent;
  let fixture: ComponentFixture<DeleteCutFgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCutFgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCutFgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
