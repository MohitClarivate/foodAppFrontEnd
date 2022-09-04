import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { BranchListComponent } from './branch-list/branch-list.component';
import { BranchManagerListComponent } from './branch-manager-list/branch-manager-list.component';
import { MenuComponent } from './menu/menu.component';
import { OrdersComponent } from './orders/orders.component';
import { ManagerListPipe } from './Pipes/manager-list.pipe';
import { AddBranchComponent } from './add-branch/add-branch.component';
import { EditBranchComponent } from './edit-branch/edit-branch.component';
import { FoodComponent } from './food/food.component';
import { MenuPipe } from './Pipes/menu.pipe';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { EditFoodComponent } from './edit-food/edit-food.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AddOrderComponent } from './add-order/add-order.component';
import { AddFoodComponent } from './add-food/add-food.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { BillComponent } from './bill/bill.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { StaffListPipe } from './Pipes/staff-list.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    EditUserComponent,
    LoginUserComponent,
    BranchListComponent,
    BranchManagerListComponent,
    MenuComponent,
    OrdersComponent,
    ManagerListPipe,
    AddBranchComponent,
    EditBranchComponent,
    FoodComponent,
    MenuPipe,
    EditMenuComponent,
    EditFoodComponent,
    AddMenuComponent,
    AddOrderComponent,
    AddFoodComponent,
    EditOrderComponent,
    HomeComponentComponent,
    BillComponent,
    StaffListComponent,
    StaffListPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
