Example.LinkView = Em.View.extend({
  templateName: "link_view",

  click: function(evt) {
    console.log("LinkView.click + " + this.get('content').displayText());
    Example.contentController.selectLink(this.get('content'));
  }

});

