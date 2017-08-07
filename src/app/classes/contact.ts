import {Message} from './message';

export class Contact {
  constructor(public name: string,
              public messages: Array<Message>,
              public lastVisit: Date) {};
}
