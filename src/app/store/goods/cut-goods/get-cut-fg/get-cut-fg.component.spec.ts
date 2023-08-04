import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCutFgComponent } from './get-cut-fg.component';

describe('GetCutFgComponent', () => {
  let component: GetCutFgComponent;
  let fixture: ComponentFixture<GetCutFgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCutFgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCutFgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
