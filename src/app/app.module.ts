import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteComponent } from './site/site.component';
import { NavbarComponent } from './site/navbar/navbar.component';
import { FooterComponent } from './site/footer/footer.component';
import { LoginComponent } from './site/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { SaleComponent } from './sale/sale.component';
import { ManagerComponent } from './manager/manager.component';
import { StoreComponent } from './store/store.component';
import { UserComponent } from './admin/user/user.component';
import { PutUserComponent } from './admin/user/put-user/put-user.component';
import { PostUserComponent } from './admin/user/post-user/post-user.component';
import { DeleteUserComponent } from './admin/user/delete-user/delete-user.component';
import { LocationStoreComponent } from './store/location-store/location-store.component';
import { GetLocationStoreComponent } from './store/location-store/get-location-store/get-location-store.component';
import { PutLocationStoreComponent } from './store/location-store/put-location-store/put-location-store.component';
import { PostLocationStoreComponent } from './store/location-store/post-location-store/post-location-store.component';
import { DeleteLocationStoreComponent } from './store/location-store/delete-location-store/delete-location-store.component';
import { GoodsComponent } from './store/goods/goods.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarAdminComponent } from './admin/navbar-admin/navbar-admin.component';
import { SidebarAdminComponent } from './admin/sidebar-admin/sidebar-admin.component';
import { SidebarSaleComponent } from './sale/sidebar-sale/sidebar-sale.component';
import { SidebarManagerComponent } from './manager/sidebar-manager/sidebar-manager.component';
import { SidebarStoreComponent } from './store/sidebar-store/sidebar-store.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { GetUserComponent } from './admin/user/get-user/get-user.component';
import { GoodsSaleComponent } from './sale/goods-sale/goods-sale.component';
import { CustomerSaleComponent } from './sale/customer-sale/customer-sale.component';
import { GetCustomerSaleComponent } from './sale/customer-sale/get-customer-sale/get-customer-sale.component';
import { PutCustomerSaleComponent } from './sale/customer-sale/put-customer-sale/put-customer-sale.component';
import { PostCustomerSaleComponent } from './sale/customer-sale/post-customer-sale/post-customer-sale.component';
import { DeleteCustomerSaleComponent } from './sale/customer-sale/delete-customer-sale/delete-customer-sale.component';
import { RawMaterialComponent } from './sale/raw-material/raw-material.component';
import { GetRawMaterialComponent } from './sale/raw-material/get-raw-material/get-raw-material.component';
import { PutRawMaterialComponent } from './sale/raw-material/put-raw-material/put-raw-material.component';
import { PostRawMaterialComponent } from './sale/raw-material/post-raw-material/post-raw-material.component';
import { DeleteRawMaterialComponent } from './sale/raw-material/delete-raw-material/delete-raw-material.component';
import { ProductTypeComponent } from './sale/product-type/product-type.component';
import { GetProductTypeComponent } from './sale/product-type/get-product-type/get-product-type.component';
import { PutProductTypeComponent } from './sale/product-type/put-product-type/put-product-type.component';
import { PostProductTypeComponent } from './sale/product-type/post-product-type/post-product-type.component';
import { DeleteProductTypeComponent } from './sale/product-type/delete-product-type/delete-product-type.component';
import { GetGoodeSaleComponent } from './sale/goods-sale/get-goode-sale/get-goode-sale.component';
import { PostGoodeSaleComponent } from './sale/goods-sale/post-goode-sale/post-goode-sale.component';
import { PutGoodeSaleComponent } from './sale/goods-sale/put-goode-sale/put-goode-sale.component';
import { DeleteGoodeSaleComponent } from './sale/goods-sale/delete-goode-sale/delete-goode-sale.component';
import { SerchPipe } from './admin/user/get-user/serch.pipe';
import { CalculateSaleComponent } from './sale/calculate-sale/calculate-sale.component';
import { AddGoodsComponent } from './store/goods/add-goods/add-goods.component';
import { CutGoodsComponent } from './store/goods/cut-goods/cut-goods.component';
import { AddCutFgComponent } from './store/goods/cut-goods/add-cut-fg/add-cut-fg.component';
import { PutCutFgComponent } from './store/goods/cut-goods/put-cut-fg/put-cut-fg.component';
import { GetCutFgComponent } from './store/goods/cut-goods/get-cut-fg/get-cut-fg.component';
import { DeleteCutFgComponent } from './store/goods/cut-goods/delete-cut-fg/delete-cut-fg.component';
import { AddAddFgComponent } from './store/goods/add-goods/add-add-fg/add-add-fg.component';
import { GetAddFgComponent } from './store/goods/add-goods/get-add-fg/get-add-fg.component';
import { PutAddFgComponent } from './store/goods/add-goods/put-add-fg/put-add-fg.component';
import { DeleteAddFgComponent } from './store/goods/add-goods/delete-add-fg/delete-add-fg.component';
import { StockFgComponent } from './store/goods/stock-fg/stock-fg.component';
import { QuotationComponent } from './sale/quotation/quotation.component';
import { GetQuotationComponent } from './sale/quotation/get-quotation/get-quotation.component';
import { PostQuotationComponent } from './sale/quotation/post-quotation/post-quotation.component';
import { PutQuotationComponent } from './sale/quotation/put-quotation/put-quotation.component';
import { DeleteQuotationComponent } from './sale/quotation/delete-quotation/delete-quotation.component';
import { PresentComponent } from './present/present.component';
import { TypeBoxComponent } from './present/type-box/type-box.component';
import { PaperColourComponent } from './present/paper-colour/paper-colour.component';
import { NavbarPresentComponent } from './present/navbar-present/navbar-present.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SiteComponent,
    NavbarComponent,
    FooterComponent,
    AdminComponent,
    SaleComponent,
    ManagerComponent,
    StoreComponent,
    UserComponent,
    PutUserComponent,
    PostUserComponent,
    DeleteUserComponent,
    LocationStoreComponent,
    GetLocationStoreComponent,
    PutLocationStoreComponent,
    PostLocationStoreComponent,
    DeleteLocationStoreComponent,
    GoodsComponent,
    NavbarAdminComponent,
    SidebarAdminComponent,
    SidebarSaleComponent,
    SidebarManagerComponent,
    SidebarStoreComponent,
    DashboardAdminComponent,
    GetUserComponent,
    GoodsSaleComponent,
    CustomerSaleComponent,
    GetCustomerSaleComponent,
    PutCustomerSaleComponent,
    PostCustomerSaleComponent,
    DeleteCustomerSaleComponent,
    RawMaterialComponent,
    GetRawMaterialComponent,
    PutRawMaterialComponent,
    PostRawMaterialComponent,
    DeleteRawMaterialComponent,
    ProductTypeComponent,
    GetProductTypeComponent,
    PutProductTypeComponent,
    PostProductTypeComponent,
    DeleteProductTypeComponent,
    GetGoodeSaleComponent,
    PostGoodeSaleComponent,
    PutGoodeSaleComponent,
    DeleteGoodeSaleComponent,
    SerchPipe,
    CalculateSaleComponent,
    AddGoodsComponent,
    CutGoodsComponent,

    AddCutFgComponent,
    PutCutFgComponent,
    GetCutFgComponent,
    DeleteCutFgComponent,
    AddAddFgComponent,
    GetAddFgComponent,
    PutAddFgComponent,
    DeleteAddFgComponent,
    StockFgComponent,
    QuotationComponent,
    GetQuotationComponent,
    PostQuotationComponent,
    PutQuotationComponent,
    DeleteQuotationComponent,
    PresentComponent,
    TypeBoxComponent,
    PaperColourComponent,
    NavbarPresentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
