import { Injectable } from '@angular/core';
import {Contact} from '../classes/contact';
import {CONTACTS} from '../mocks/contacts';

@Injectable()
export class ContactService {

  constructor() { }

  getContacts(): Contact[] {
    return CONTACTS;
  }
}
