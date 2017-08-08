import {Component, HostBinding, OnInit} from '@angular/core';
import {Message} from "../../../classes/message";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit {

  @HostBinding('class') hostClass = 'chat';

  constructor() { }

  ngOnInit() {
  }

}
