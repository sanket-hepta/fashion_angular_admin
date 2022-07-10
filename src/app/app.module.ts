import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    ContentWrapperComponent,
    ControlSidebarComponent,
    MainFooterComponent,
    DashboardComponent,
    LoginComponent,
    CategoriesComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
