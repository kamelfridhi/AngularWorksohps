import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListFournisseurComponent} from "../../DATABINDING-WORKSHOP/list-fournisseur/list-fournisseur.component";
import {ListUserComponent} from "./list-user/list-user.component";
import {UpdateUserComponent} from "./update-user/update-user.component";

const routes: Routes = [
  {
    path: '',
    component: ListUserComponent,
  },
  {
    path: 'update/:id',
    component: UpdateUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersModuleRoutingModule { }
