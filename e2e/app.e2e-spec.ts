import { TelegramPage } from './app.po';

describe('telegram App', () => {
  let page: TelegramPage;

  beforeEach(() => {
    page = new TelegramPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
