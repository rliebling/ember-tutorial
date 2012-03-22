Example.NavController = Em.Object.extend({
  content: [],
  init: function() {
    this._super();


    // automatically called when instance is created
    console.log("NavController.init");

    var myThis = this;
    addRandomElement =  function() {
      myThis.content.pushObject(Ember.Object.create({int: myThis.randomInt(10), alpha: myThis.randomAlpha()}));
    };
    for(var i=0;i<10;i++){
      addRandomElement();
    }
    setTimeout(addRandomElement, 1000);
  },

  attachNavView: function() {
    this.navView = Example.NavView.create({
      linksBinding: 'Example.navController.content'
    }).replaceIn($('#nav'));
  },

  randomInt: function(max) {
    return Math.floor((max * Math.random())) + 1;
  },
  randomAlpha: function() {
    return String.fromCharCode('A'.charCodeAt() + this.randomInt(26) - 1);
  }

});
console.log("defined Example.NavController");
