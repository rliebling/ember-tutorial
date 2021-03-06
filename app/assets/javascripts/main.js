Example = Ember.Application.create({
  navController: undefined,
  ready: function() {
    console.log("starting ready()");
    this.navController = this.NavController.create({});
    this.navController.attachNavView(); // called after we assign Example.navController, else binding of navView to the controller fails

    this.contentController = this.ContentController.create({});
    this.contentController.attachContentView();

    console.log("ending ready()");
  }
});

console.log("created application object");
