import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderMenuComponent } from './components/header/header-menu/header-menu.component';
import { HeaderContentComponent } from './components/header/header-content/header-content.component';
import { MainContentComponent } from './components/content/main-content/main-content.component';
import { ContactsComponent } from './components/content/contacts/contacts.component';
import {ContactService} from "./services/contact.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderMenuComponent,
    HeaderContentComponent,
    MainContentComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
