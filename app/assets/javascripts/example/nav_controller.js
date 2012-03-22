Example.NavController = Em.Object.extend({
  init: function() {
    this._super();

    // automatically called when instance is created
    console.log("NavController.init");
    this.attachNavView();
  },

  attachNavView: function() {
    this.navView = Example.NavView.create({}).replaceIn($('#nav'));
  }

});
console.log("defined Example.NavController");
