import { Injectable } from '@angular/core';
import {Contact} from '../classes/contact';
import {CONTACTS} from '../mocks/contacts';

@Injectable()
export class ContactService {

  private currentContact: Contact;
  constructor() { }

  getContacts(): Contact[] {
    return CONTACTS;
  }

  setCurrentContact(contact: Contact): void {
    const currentContact = this.getCurrentContact();

    if (currentContact) {
      currentContact.messages.forEach(msg => msg.selected = false);
    }

    this.currentContact = contact;
  }

  getCurrentContact(): Contact {
    return this.currentContact;
  }
}
