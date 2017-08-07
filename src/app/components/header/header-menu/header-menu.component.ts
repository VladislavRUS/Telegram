import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html'
})
export class HeaderMenuComponent implements OnInit {

  private menuOpened = false;
  constructor() { }

  ngOnInit() {}

  toggleMenu(): void {
    this.menuOpened = !this.menuOpened;
  }

}
