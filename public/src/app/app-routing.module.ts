import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { ElephantdetailsComponent } from './component/elephantdetails/elephantdetails.component';
import { InsertdetailsComponent } from './component/insertdetails/insertdetails.component';
import { DetailsearchComponent } from './component/detailsearch/detailsearch.component';
import {UserdetailsComponent} from './component/userdetails/userdetails.component';
import { MainviewComponent } from './component/mainview/mainview.component';
import {AuthGardService} from './auth-gard.service'

//all the routing of angular module
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'alldetails', component: MainviewComponent,canActivate: [AuthGardService]},
  { path: 'details/:id', component: ElephantdetailsComponent,canActivate: [AuthGardService]},
  { path: 'insertdetail', component: InsertdetailsComponent,canActivate: [AuthGardService]},
  { path: 'searchdetails', component: DetailsearchComponent,canActivate: [AuthGardService]},
  { path: 'userdetails', component: UserdetailsComponent,canActivate: [AuthGardService]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { 
  
 
}
