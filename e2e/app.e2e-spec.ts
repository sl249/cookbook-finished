import { CookbookAppPage } from './app.po';

describe('cookbook-app App', function() {
  let page: CookbookAppPage;

  beforeEach(() => {
    page = new CookbookAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
