import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperColourComponent } from './paper-colour.component';

describe('PaperColourComponent', () => {
  let component: PaperColourComponent;
  let fixture: ComponentFixture<PaperColourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaperColourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaperColourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
