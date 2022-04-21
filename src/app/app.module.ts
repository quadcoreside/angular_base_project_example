import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { ContactsComponent } from './contacts/contacts.component';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { ContactsService } from './services/contacts.service';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService, ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
