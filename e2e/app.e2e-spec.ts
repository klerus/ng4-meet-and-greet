import { DevMeetingsPage } from './app.po';

describe('dev-meetings App', () => {
  let page: DevMeetingsPage;

  beforeEach(() => {
    page = new DevMeetingsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
