import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './admin/user/user.component';
import { ManagerComponent } from './manager/manager.component';
import { CalculateComponent } from './sale/calculate/calculate.component';
import { CustomerComponent } from './sale/customer/customer.component';
import { GoodsTypeComponent } from './sale/goods-type/goods-type.component';
import { RawMaterialComponent } from './sale/raw-material/raw-material.component';
import { SaleComponent } from './sale/sale.component';
import { LoginComponent } from './site/login/login.component';
import { SiteComponent } from './site/site.component';
import { GoodsComponent } from './store/goods/goods.component';
import { LocationStoreComponent } from './store/location-store/location-store.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  {
    path: '', component: SiteComponent,
    children: [
      { path: '', component: LoginComponent },

    ]
  },
  {
    path: '', component: AdminComponent,
    children: [
      { path: 'user', component: UserComponent },
    ]
  },
  {
    path: '', component: SaleComponent,
    children: [
      { path: 'customer', component: CustomerComponent },
      { path: 'goods-type', component: GoodsTypeComponent },
      { path: 'rawmat', component: RawMaterialComponent },
      { path: 'cal', component: CalculateComponent },
    ]
  },
  {
    path: '', component: StoreComponent,
    children: [
      { path: 'goods', component: GoodsComponent },
      { path: 'locationStore', component: LocationStoreComponent },
    ]
  },
  // {
  //   path: '', component: ManagerComponent,
  //   children: [
  //     { path: 'goods', component: GoodsComponent },
  //     { path: 'locationStore', component: LocationStoreComponent },
  //     { path: 'customer', component: CustomerComponent }
  //   ]
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
