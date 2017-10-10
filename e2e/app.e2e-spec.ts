import { InvetoryManagementAppPage } from './app.po';

describe('invetory-management-app App', () => {
  let page: InvetoryManagementAppPage;

  beforeEach(() => {
    page = new InvetoryManagementAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
