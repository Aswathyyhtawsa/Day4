import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ArtformsComponent } from './pages/artforms/artforms.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactComponent,
    ArtformsComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    FooterComponent,
    SinglepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
