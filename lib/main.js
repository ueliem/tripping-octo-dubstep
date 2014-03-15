var panel = require("sdk/panel").Panel({
  contentURL: "about:blank",
  onHide: function () {
    panel.contentURL = "about:blank";
  }
});

require("sdk/widget").Widget({
  id: "trello",
  label: "Trello",
  contentURL: "https://trello.com/favicon.ico",
  panel: panel,
  onClick: function() {
    //panel.contentURL = require("sdk/self").data.url("login.html");
    panel.contentURL = "https://trello.com/";
  }
});
