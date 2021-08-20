import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UserComponent} from './user/user.component';
import {ContactComponent} from './contact/contact.component'
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    component:HomeComponent,
    path:'home'
  },
  {
    component:LoginComponent,
    path:'login'
  },
  {
    component:RegisterComponent,
    path:'register'
  },
  {
    component:UserComponent,
    path:'user'
  },
  {
    component:ContactComponent,
    path:'contact'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
