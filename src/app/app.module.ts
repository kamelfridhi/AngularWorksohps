import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FournisseurComponent } from './DATABINDING-WORKSHOP/fournisseur/fournisseur.component';
import { ListFournisseurComponent } from './DATABINDING-WORKSHOP/list-fournisseur/list-fournisseur.component';
import { ListProduitsComponent } from './DATABINDING-WORKSHOP/list-produits/list-produits.component';
import {UsersModuleModule} from "./users/users-module/users-module.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FournisseurComponent,
    ListFournisseurComponent,
    ListProduitsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UsersModuleModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
