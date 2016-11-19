import { MaterialComponentsPage } from './app.po';

describe('material-components App', function() {
  let page: MaterialComponentsPage;

  beforeEach(() => {
    page = new MaterialComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
