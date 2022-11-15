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
import { FormsModule } from '@angular/forms';
import { UserComponent } from './admin/user/user.component';
import { GetUserComponent } from './admin/user/get-user/get-user.component';
import { PutUserComponent } from './admin/user/put-user/put-user.component';
import { PostUserComponent } from './admin/user/post-user/post-user.component';
import { DeleteUserComponent } from './admin/user/delete-user/delete-user.component';
import { RawMaterialComponent } from './sale/raw-material/raw-material.component';
import { LocationStoreComponent } from './store/location-store/location-store.component';
import { GetLocationStoreComponent } from './store/location-store/get-location-store/get-location-store.component';
import { PutLocationStoreComponent } from './store/location-store/put-location-store/put-location-store.component';
import { PostLocationStoreComponent } from './store/location-store/post-location-store/post-location-store.component';
import { DeleteLocationStoreComponent } from './store/location-store/delete-location-store/delete-location-store.component';
import { GoodsComponent } from './store/goods/goods.component';
import { GetGoodsComponent } from './store/goods/get-goods/get-goods.component';
import { PutGoodsComponent } from './store/goods/put-goods/put-goods.component';
import { PostGoodsComponent } from './store/goods/post-goods/post-goods.component';
import { DeleteGoodsComponent } from './store/goods/delete-goods/delete-goods.component';
import { CustomerComponent } from './manager/customer/customer.component';


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
    GetUserComponent,
    PutUserComponent,
    PostUserComponent,
    DeleteUserComponent,
    RawMaterialComponent,
    LocationStoreComponent,
    GetLocationStoreComponent,
    PutLocationStoreComponent,
    PostLocationStoreComponent,
    DeleteLocationStoreComponent,
    GoodsComponent,
    GetGoodsComponent,
    PutGoodsComponent,
    PostGoodsComponent,
    DeleteGoodsComponent,
    CustomerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
