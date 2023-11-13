import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersModuleRoutingModule } from './users-module-routing.module';
import {ListUserComponent} from "./list-user/list-user.component";
import {FormsModule} from "@angular/forms";
import { UpdateUserComponent } from './update-user/update-user.component';


@NgModule({
  declarations: [
    ListUserComponent,
    UpdateUserComponent,
  ],
  imports: [
    CommonModule,
    UsersModuleRoutingModule,
    FormsModule,


  ]
})
export class UsersModuleModule { }
