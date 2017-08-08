import { Component, OnInit } from '@angular/core';
import {Contact} from "../../../classes/contact";
import {ContactService} from "../../../services/contact.service";
import {Message} from "../../../classes/message";

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html'
})
export class ChatMessagesComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  currentContact(): Contact {
    return this.contactService.getCurrentContact();
  }

  getTime(msg: Message): string {
    const minutes = msg.time.getMinutes();
    const seconds = msg.time.getSeconds();

    const minutesString = minutes < 10 ? '0' + minutes.toString() : minutes.toString();
    const secondsString = seconds < 10 ? '0' + seconds.toString() : seconds.toString();

    return msg.time.getHours() + ':' + minutesString + ':' + secondsString;
  }

  messages(): Message[] {
    return this.currentContact().messages;
  }

  selectMessage(msg: Message) {
    msg.selected = !msg.selected;
  }
}
