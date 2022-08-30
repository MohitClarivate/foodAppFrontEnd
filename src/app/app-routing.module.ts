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

const routes: Routes = [
  {
    path: 'adduser',
    component: AddUserComponent,
  },
  {
    path: 'addbranch',
    component: AddBranchComponent,
  },
  {
    path: 'edituser/:id',
    component: EditUserComponent,
  },
  {
    path: 'editbranch/:id',
    component: EditBranchComponent,
  },
  {
    path: 'loginuser',
    component: LoginUserComponent,
  },
  {
    path: 'branchlist',
    component: BranchListComponent,
  },
  {
    path: 'branchmanagerlist',
    component: BranchManagerListComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'addmenu',
    component: AddMenuComponent,
  },
  {
    path: 'editmenu/:id',
    component: EditMenuComponent,
  },
  {
    path: 'food',
    component: FoodComponent,
  },
  {
    path: 'editfood/:id',
    component: EditFoodComponent,
  },
  {
    path: 'orders',
    component: OrdersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
