//  For simplicity ain't going to define a paradigm (i.e.: MVC, MVVM) to split logic from view
//  Hope the result will be simple enough to justify this decision
class Extension {
  constructor() {
    this.store = new Store();
    this.ui = new UI();

    this.ui.disableUi();

    this.getCurrentTabUrl((url) => {
      this.ui.setTitle("Tour - " + url);

      //TODO: enable create new step + save?

      this.ui.onCreateNewStep(() => {
        this.createNewStep();
      })
    });
  }

  createNewStep() {
    //TODO:
  }

  getCurrentTabUrl(callback) {
    // Query filter to be passed to chrome.tabs.query - see
    // https://developer.chrome.com/extensions/tabs#method-query
    var queryInfo = {
      active: true,
      currentWindow: true
    };

    chrome.tabs.query(queryInfo, (tabs) => {
      var tab = tabs[0];
      var url = tab.url;
      console.assert(typeof url == 'string', 'tab.url should be a string');
      callback(url);
    });
  }
}
