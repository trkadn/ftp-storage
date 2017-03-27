import { FtpStoragePage } from './app.po';

describe('ftp-storage App', () => {
  let page: FtpStoragePage;

  beforeEach(() => {
    page = new FtpStoragePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
