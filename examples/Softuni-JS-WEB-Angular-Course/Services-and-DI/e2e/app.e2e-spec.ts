import { ServicesAndDIPage } from './app.po';

describe('services-and-di App', () => {
  let page: ServicesAndDIPage;

  beforeEach(() => {
    page = new ServicesAndDIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
