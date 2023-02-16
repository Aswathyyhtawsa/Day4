import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtformsComponent } from './pages/artforms/artforms.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';

const routes: Routes = [
  {
    path:'',component: HomePageComponent
  },
  {
    path:'contact',component: ContactComponent
  },
  {
    path:'login',component: LoginComponent
  },
  {
    path:'signup',component: SignupComponent
  },
  {
    path:'artforms',component: ArtformsComponent
  },
  {
    path:'single',component: SinglepageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
