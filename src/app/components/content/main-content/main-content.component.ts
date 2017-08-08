import { Component, OnInit } from '@angular/core';
import {ContactService} from "../../../services/contact.service";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html'
})
export class MainContentComponent implements OnInit {

  constructor(public contactService: ContactService) { }

  ngOnInit() {
  }

}
