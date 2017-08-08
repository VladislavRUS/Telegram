import {Component, HostBinding, OnInit} from '@angular/core';
import {Contact} from "../../../classes/contact";
import {ContactService} from "../../../services/contact.service";

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html'
})
export class ChatInputComponent implements OnInit {

  @HostBinding('class') hostClass = 'chat-input';

  constructor(public contactService: ContactService) { }

  ngOnInit() {


  }

  currentContact(): Contact {
    return this.contactService.getCurrentContact();
  }

}
