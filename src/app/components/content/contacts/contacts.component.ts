import { Component, OnInit } from '@angular/core';
import {Contact} from "app/classes/contact";
import {ContactService} from "../../../services/contact.service";
import {Message} from "../../../classes/message";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html'
})
export class ContactsComponent implements OnInit {

  private contacts: Array<Contact>;
  private filteredContacts: Array<Contact>;
  private searchContact = 'fdfdf';
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
    this.filteredContacts = Object.assign([], this.contacts);
  }

  unreadMessages(c: Contact): number {
    this.contacts.forEach(contact => {
      if (contact.name === c.name) {
        return contact.messages.filter(msg => msg.read === false).length;
      }
    });
    return 0;
  }

  getLastVisit(c: Contact): string {
    const minutes: number = c.lastVisit.getMinutes();
    let minutesString: string;

    if (minutes < 10) {
      minutesString = '0' + minutes.toString();

    } else {
      minutesString = minutes.toString();
    }

    return c.lastVisit.getHours().toString() + ':' + minutesString;
  }

  onFilter(value: string): void {
    this.filteredContacts = this.contacts.filter( c => {
      return c.name.includes(value);
    });
  }
}
