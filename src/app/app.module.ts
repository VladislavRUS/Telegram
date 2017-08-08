import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderMenuComponent } from './components/header/header-menu/header-menu.component';
import { HeaderContentComponent } from './components/header/header-content/header-content.component';
import { MainContentComponent } from './components/content/main-content/main-content.component';
import { ContactsComponent } from './components/content/contacts/contacts.component';
import {ContactService} from './services/contact.service';
import { ChatComponent } from './components/content/chat/chat.component';
import { SearchContactComponent } from './components/content/search-contact/search-contact.component';
import { ChatMessagesComponent } from './components/content/chat-messages/chat-messages.component';
import { ChatInputComponent } from './components/content/chat-input/chat-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderMenuComponent,
    HeaderContentComponent,
    MainContentComponent,
    ContactsComponent,
    ChatComponent,
    SearchContactComponent,
    ChatMessagesComponent,
    ChatInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
