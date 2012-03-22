Example.ContentController = Ember.Object.extend({
  selectedLink : "please select a link on the left",

  init: function() {
    this._super();
  },

  attachContentView: function() {
    this.contentView = Example.ContentView.create({}).replaceIn($("#content"));
  },

  selectLink: function(link) {
    this.set('selectedLink' , link);
    $('title').text("Selected link " + link);
  }

});
