import { MyDreamAppPage } from './app.po';

describe('my-dream-app App', () => {
  let page: MyDreamAppPage;

  beforeEach(() => {
    page = new MyDreamAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
