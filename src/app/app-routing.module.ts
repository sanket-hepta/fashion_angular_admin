import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: 'admin/login', component:LoginComponent},
  {path: 'dashboard', component:DashboardComponent, canActivate: [AuthGuardService]},
  {path: 'categories', component:CategoriesComponent, canActivate: [AuthGuardService]},
  {path: 'products', component:ProductsComponent, canActivate: [AuthGuardService]},
  {path: '', redirectTo: 'admin/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
