import { CleanAppPage } from './app.po';

describe('clean-app App', function() {
  let page: CleanAppPage;

  beforeEach(() => {
    page = new CleanAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
