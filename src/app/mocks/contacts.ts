import {Contact} from '../classes/contact';
import {Message} from '../classes/message';

export const CONTACTS: Contact[] = [
  new Contact(
    'Tanya',
    [
      new Message('Hello!', false),
      new Message('Hi', false),
      new Message('How are you?', false),
      new Message('I am fine thank you', false),
      new Message('Bla bla!', false),
      new Message('Angular test app', false),
      new Message('Using TypeScript!', false),
    ],
    new Date()),

  new Contact(
    'Masha',
    [ new Message('Where are you?', false) ],
    new Date()),

  new Contact(
    'Nastya',
    [ new Message('See you later..', false) ],
    new Date()),
];
