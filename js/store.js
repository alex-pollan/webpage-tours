class Store {
  load(url, callback) {
    chrome.storage.sync.get(url, (items) => {
      callback(chrome.runtime.lastError ? null : items[url]);
    });
  }

  save(url, tour, callback) {
    var items = {};
    items[url] = tour;
    chrome.storage.sync.set(items, () => {
      callback(chrome.runtime.lastError);
    });
  }

  remove(url, callback) {
    chrome.storage.sync.remove(items, () => {
      callback(chrome.runtime.lastError);
    });
  }
}
