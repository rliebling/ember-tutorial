Example = Ember.Application.create({
  navController: undefined,
  ready: function() {
    console.log("starting ready()");
    this.navController = this.NavController.create({});
    console.log("ending ready()");
  }
});

console.log("created application object");
