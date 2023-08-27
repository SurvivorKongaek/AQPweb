
import { ProductTypeComponent } from './sale/product-type/product-type.component';
import { RawMaterialComponent } from './sale/raw-material/raw-material.component';
import { GoodsSaleComponent } from './sale/goods-sale/goods-sale.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './admin/user/user.component';
import { ManagerComponent } from './manager/manager.component';
import { SaleComponent } from './sale/sale.component';
import { LoginComponent } from './site/login/login.component';
import { SiteComponent } from './site/site.component';
import { GoodsComponent } from './store/goods/goods.component';
import { LocationStoreComponent } from './store/location-store/location-store.component';
import { StoreComponent } from './store/store.component';
import { CustomerSaleComponent } from './sale/customer-sale/customer-sale.component';
import { CalculateSaleComponent } from './sale/calculate-sale/calculate-sale.component';
import { CutGoodsComponent } from './store/goods/cut-goods/cut-goods.component';
import { AddGoodsComponent } from './store/goods/add-goods/add-goods.component';
import { StockFgComponent } from './store/goods/stock-fg/stock-fg.component';
import { QuotationComponent } from './sale/quotation/quotation.component';
import { PresentComponent } from './present/present.component';
import { TypeBoxComponent } from './present/type-box/type-box.component';
import { PaperColourComponent } from './present/paper-colour/paper-colour.component';

const routes: Routes = [
  {
    path: '', component: SiteComponent,
    children: [
      { path: '', component: LoginComponent },

    ]
  },
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: 'user', component: UserComponent },
    ]
  },
  {
    path: 'sale', component: SaleComponent,
    children: [
      { path: 'customer-sale', component: CustomerSaleComponent },
      { path: 'product-type', component: ProductTypeComponent },
      { path: 'raw-material', component: RawMaterialComponent },
      { path: 'goods-sale', component: GoodsSaleComponent },
      { path: 'calculate', component: CalculateSaleComponent },
      { path: 'quotation', component: QuotationComponent },
      { path: 'stock', component: StockFgComponent },
      { path: 'Login', component: LoginComponent },
    ]
  },
  {
    path: 'store', component: StoreComponent,
    children: [
      { path: 'goods', component: GoodsComponent },
      { path: 'location-store', component: LocationStoreComponent },
      { path: 'goods/add-goods', component: AddGoodsComponent },
      { path: 'goods/cut-goods', component: CutGoodsComponent },
      { path: 'goods/stockFg', component: StockFgComponent },
      { path: 'Login', component: LoginComponent },
    ]
  },
  {
    path: 'manager', component: ManagerComponent,
    children: [
      { path: 'stock', component: StockFgComponent },
      { path: 'location-store', component: LocationStoreComponent },
      { path: 'customer-sale', component: CustomerSaleComponent },
      { path: 'Login', component: LoginComponent },
    ]
  },
  {
    path: 'present', component: PresentComponent,
    children: [
      { path: 'paper', component: PaperColourComponent },
      { path: 'typebox', component: TypeBoxComponent },
      { path: 'login', component: LoginComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
