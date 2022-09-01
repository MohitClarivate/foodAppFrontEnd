import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBranchComponent } from './add-branch/add-branch.component';
import { AddUserComponent } from './add-user/add-user.component';
import { BranchManagerListComponent } from './branch-manager-list/branch-manager-list.component';
import { BranchListComponent } from './branch-list/branch-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { MenuComponent } from './menu/menu.component';
import { OrdersComponent } from './orders/orders.component';
import { EditBranchComponent } from './edit-branch/edit-branch.component';
import { FoodComponent } from './food/food.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { EditFoodComponent } from './edit-food/edit-food.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { AddFoodComponent } from './add-food/add-food.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginGuard } from './Guards/login.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponentComponent,
  },
  {
    path: 'adduser',
    component: AddUserComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'addbranch',
    component: AddBranchComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'edituser/:id',
    component: EditUserComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'editbranch/:id',
    component: EditBranchComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'loginuser',
    component: LoginUserComponent,
  },
  {
    path: 'branchlist',
    component: BranchListComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'branchmanagerlist',
    component: BranchManagerListComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'menu',
    component: MenuComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'addmenu',
    component: AddMenuComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'editmenu/:id',
    component: EditMenuComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'addfood',
    component: AddFoodComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'food',
    component: FoodComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'editfood/:id',
    component: EditFoodComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'orders',
    component: OrdersComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'addorder',
    component: AddOrderComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'editorder/:id',
    component: EditOrderComponent,
    canActivate: [LoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
