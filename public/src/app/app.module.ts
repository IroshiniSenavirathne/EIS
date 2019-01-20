import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FileSelectDirective } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './component/home/home.component';
import { Navbar2Component } from './component/navbar2/navbar2.component';
import { MainviewComponent } from './component/mainview/mainview.component';
import { ElephantdetailsComponent } from './component/elephantdetails/elephantdetails.component';


import {UserService} from './user.service';
import {EisdetailsService} from './eisdetails.service';
import {ImageServiceService} from './image-service.service';
import{AuthGardService}from './auth-gard.service';
import { InsertdetailsComponent } from './component/insertdetails/insertdetails.component';
import { UserdetailsComponent } from './component/userdetails/userdetails.component';
import { DetailsearchComponent } from './component/detailsearch/detailsearch.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    Navbar2Component,
    MainviewComponent,
    ElephantdetailsComponent,
    InsertdetailsComponent,
    FileSelectDirective,
    UserdetailsComponent,
    DetailsearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [UserService,AuthGardService,ImageServiceService,EisdetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
