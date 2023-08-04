import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutCutFgComponent } from './put-cut-fg.component';

describe('PutCutFgComponent', () => {
  let component: PutCutFgComponent;
  let fixture: ComponentFixture<PutCutFgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutCutFgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutCutFgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
