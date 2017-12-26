import { ComponentsAndMarkupPage } from './app.po';

describe('components-and-markup App', () => {
  let page: ComponentsAndMarkupPage;

  beforeEach(() => {
    page = new ComponentsAndMarkupPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
