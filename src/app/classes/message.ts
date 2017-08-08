export class Message {
  constructor(public text: string,
              public read: boolean,
              public time?: Date,
              public selected?: boolean) {
    this.time = new Date();
    this.selected = false;
  }
}
