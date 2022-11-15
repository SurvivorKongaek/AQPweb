import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteComponent } from './site/site.component';
import { NavbarComponent } from './site/navbar/navbar.component';
import { FooterComponent } from './site/footer/footer.component';
import { LoginComponent } from './site/login/login.component';
import { AdminComponent } from './site/admin/admin.component';
import { SaleComponent } from './site/sale/sale.component';
import { ManagerComponent } from './site/manager/manager.component';
import { StoreComponent } from './site/store/store.component';

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
    StoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
