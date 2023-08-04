import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSaleComponent } from './sidebar-sale.component';

describe('SidebarSaleComponent', () => {
  let component: SidebarSaleComponent;
  let fixture: ComponentFixture<SidebarSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
