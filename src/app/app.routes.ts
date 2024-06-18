import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingHeadComponent} from "./landing-head/landing-head.component";
import {ContactComponent} from "./contact/contact.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: LandingHeadComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
