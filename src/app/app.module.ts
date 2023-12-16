import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { LoginPage } from './login/login.page'; 
import { AnnoncesPage } from './annonces/annonces.page'; 

import { UpdateAnnoncePage } from './annonces/update-annonce.page';
import { CreateAnnoncePage } from './annonces/create-annonce.page';
import { AppRoutingModule } from './app-routing.module';
import { NavbarPage } from './navbar/navbar.page';
import { AllAnnoncesPage } from './all_annonces/all_annonces.page';

@NgModule({
  declarations: [AppComponent,LoginPage,AnnoncesPage,UpdateAnnoncePage,CreateAnnoncePage,NavbarPage,AllAnnoncesPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,    CommonModule,
    FormsModule,HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
