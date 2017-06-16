import { EvergreenTrailAssociationPage } from './app.po';

describe('evergreen-trail-association App', () => {
  let page: EvergreenTrailAssociationPage;

  beforeEach(() => {
    page = new EvergreenTrailAssociationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
