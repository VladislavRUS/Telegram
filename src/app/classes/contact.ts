import {Message} from './message';

export class Contact {
  constructor(public name: string,
              public messages: Array<Message>,
              public lastVisit: Date, public color?: string ) {

    this.color = this.getRandomColor();
  };

  getRandomColor(): string {
    return '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
  }
}
