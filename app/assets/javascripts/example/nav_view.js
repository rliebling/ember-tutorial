Example.NavView = Em.View.extend({
  templateName: "nav_view",

  init: function() {
    this._super();
    // automatically called when instance is created
    console.log("NavView.init");
  },

  maxTextField : Em.TextField.extend({
    insertNewline: function(){
      var max = this.get('value');
      Example.navController.setMax(max);
    }
  })

});

