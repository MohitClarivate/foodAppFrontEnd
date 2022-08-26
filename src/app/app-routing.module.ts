import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { BranchListComponent } from './branch-list/branch-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { MenuComponent } from './menu/menu.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {
    path: 'adduser',
    component: AddUserComponent,
  },
  {
    path: 'edituser',
    component: EditUserComponent,
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
    path: 'menu',
    component: MenuComponent,
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
