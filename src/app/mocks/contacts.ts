import {Contact} from '../classes/contact';
import {Message} from '../classes/message';

export const CONTACTS: Contact[] = [
  new Contact(
    'Tanya',
    [ new Message('Hello!', false) ],
    new Date()),
];
