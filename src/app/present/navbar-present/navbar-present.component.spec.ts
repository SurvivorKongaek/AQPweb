import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPresentComponent } from './navbar-present.component';

describe('NavbarPresentComponent', () => {
  let component: NavbarPresentComponent;
  let fixture: ComponentFixture<NavbarPresentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarPresentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarPresentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
