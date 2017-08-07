import {Component, Input, OnInit} from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-header-content',
  templateUrl: './header-content.component.html',
  animations: [
    trigger('contentState', [
      state('inactive', style({
        transform: 'translateY(100%)',
        opacity: '0'
      })),
      state('active', style({
        transform: 'translateY(0)',
        opacity: '1'
      })),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('200ms ease-out'))
    ])
  ]
})
export class HeaderContentComponent implements OnInit {

  @Input() animationState: string;
  constructor() { }

  ngOnInit() {
  }

}
