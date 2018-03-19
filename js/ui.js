class UI {
  constructor() {
    this.title = document.getElementById("title");
    this.createNewStepButton = document.getElementById("createNewStep");
    this.saveButton = document.getElementById("save");
  }

  disableUi() {
    this.enable(this.createNewStepButton, false);
    this.enable(this.saveButton, false);
  }

  setTitle(text) {
    console.debug("setting text: " + text);
    this.title.innerHTML = text;
  }

  enable(element, enable) {
    if (enable === undefined) {
      enable = true;
    }
    if (!enable) {
      element.setAttribute("disabled", "disabled");
    } else {
      element.removeAttribute("disabled");
    }
  }

  onCreateNewStep(callback) {
    this.createNewStepButton.addEventListener("click", () => {
      callback();
    });
  }
}
