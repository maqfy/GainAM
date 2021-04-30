import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { HomeComponent } from './components/user/home/home.component';
import { DetailComponent } from './components/user/detail/detail.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { ProductListComponent } from './components/admin/product-list/product-list.component';
import { UserTemplateComponent } from './components/template/user-template/user-template.component';
import { AdminTemplateComponent } from './components/template/admin-template/admin-template.component';
import { NotFoundComponent } from './components/error/not-found/not-found.component';
import { UnathorizedComponent } from './components/error/unathorized/unathorized.component';
import {GalleryComponent} from './components/gallery/gallery.component'
import {MenupageComponent} from './components/menupage/menupage.component'
import {FooterComponent} from './components/footer/footer.component'
import {ChefpageComponent} from './components/chefpage/chefpage.component'
import {BannerComponent} from './components/banner/banner.component'
import {MatGridListModule} from '@angular/material/grid-list';
import {
  MatButtonModule, MatCardModule,
  MatInputModule, MatListModule,
  MatToolbarModule, MatSelectModule,
  MatFormFieldModule, MatTableModule,
  MatPaginatorModule, MatSortModule,
  MatProgressBarModule, MatIconModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TransactionListComponent } from './components/admin/transaction-list/transaction-list.component';
import { HoursComponent } from './components/hours/hours.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import{ReservationListComponent} from './components/admin/reservation-list/reservation-list.component';
import { ChefDashboardComponent } from './components/chef/chef-dashboard/chef-dashboard.component';
import { InventoryListComponent } from './components/admin/inventory-list/inventory-list.component';
import {ManagerdashboardComponent} from './components/manager/managerdashboard/managerdashboard.component'
import {InventoryListManagerComponent} from './components/manager/inventory-list-manager/inventory-list-manager.component';
import { ReservationListManagerComponent } from './components/manager/reservation-list-manager/reservation-list-manager.component'
import { ProductListManagerComponent } from './components/manager/product-list-manager/product-list-manager.component';
import { ProductListChefComponent } from './components/chef/product-list-chef/product-list-chef.component';
import { InventoryListChefComponent } from './components/chef/inventory-list-chef/inventory-list-chef.component';
import { CartpageComponent } from './components/cart/cartpage/cartpage.component';
import { EmployeeDashboardComponent } from './components/employee/employee-dashboard/employee-dashboard.component';
import { InventoryListEmployeeComponent } from './components/employee/inventory-list-employee/inventory-list-employee.component';
import { ProductListEmployeeComponent } from './components/employee/product-list-employee/product-list-employee.component';
import { SearchComponent } from './components/user/search/search.component';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    DetailComponent,
    DashboardComponent,
    
    UserTemplateComponent,
    AdminTemplateComponent,
    NotFoundComponent,
    UnathorizedComponent,
    TransactionListComponent,
    FooterComponent,
    BannerComponent,
    
    HoursComponent,
    MenupageComponent,
   
    GalleryComponent,
   
    UserListComponent,
    ProductListComponent,
    ReservationComponent,
    ReservationListComponent,
    InventoryListComponent,
    
    
    ManagerdashboardComponent,
    InventoryListManagerComponent,
    ReservationListManagerComponent,
    ProductListManagerComponent,
    
    ChefpageComponent,
    ChefDashboardComponent,
    ProductListChefComponent,
    InventoryListChefComponent,
    CartpageComponent,

    EmployeeDashboardComponent,
    InventoryListEmployeeComponent,
    ProductListEmployeeComponent,
    SearchComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressBarModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatMenuModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
