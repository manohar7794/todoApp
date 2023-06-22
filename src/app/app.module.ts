import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigtionComponent } from './navigtion/navigtion.component';
import { LoginComponent } from './Login/Login.component';
import { SignupComponent } from './Signup/Signup.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { AccountsInfoComponent } from './accounts-info/accounts-info.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [						
    AppComponent,
      HeaderComponent,
      NavigtionComponent,
      LoginComponent,
      SignupComponent,
      ProfileComponent,
      AccountsInfoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
