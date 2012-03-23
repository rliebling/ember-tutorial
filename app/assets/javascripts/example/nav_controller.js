Example.NavController = Em.ArrayController.extend({
  content: [],
  sortBy: undefined,
  max : undefined,

  init: function() {
    this._super();


    // automatically called when instance is created
    console.log("NavController.init");

    var myThis = this;
    addRandomElement =  function() {
      console.log("Adding random element");
      myThis.pushObject(Ember.Object.create({int: myThis.randomInt(10), alpha: myThis.randomAlpha(), displayText: function(){ return "" + this.int + "," + this.alpha;}}));
    };
    for(var i=0;i<10;i++){
      addRandomElement();
    }
    setTimeout(addRandomElement, 5000);
    setTimeout(addRandomElement, 7000);
    setTimeout(addRandomElement, 9000);
  },

  attachNavView: function() {
    this.navView = Example.NavView.create({
      linksBinding: 'Example.navController.sortedLinks',
      lengthBinding: 'Example.navController.length'
    }).replaceIn($('#nav'));
  },

  randomInt: function(max) {
    return Math.floor((max * Math.random())) + 1;
  },
  randomAlpha: function() {
    return String.fromCharCode('A'.charCodeAt() + this.randomInt(26) - 1);
  },

  setMax: function(max) {
    this.set('max', max);
  },

  sortAlpha: function() {
    console.log("sortAlpha invoked");
    this.set('sortBy' , 'alpha');
  },
  sortNumeric: function() {
    console.log("sortNumeric invoked");
    this.set('sortBy' , 'int');
  },

  length: function() {
    var links = this.get("content").toArray();
    return links.length;
  }.property("content"),

  sortedLinks: function() {
    var links = this.get("content").toArray();
    var sortBy = this.get("sortBy");
    var sorted = sortBy != undefined ? links.sort(function(a,b){
        var aval = a.get(sortBy);
        var bval = b.get(sortBy);
        return aval < bval ? -1 : (aval==bval ? 0 : 1);
    }) : links;
    var max = this.get('max');
    if (max != undefined) {
      sorted = sorted.filter(function(x){
          return x.int <= max;
          });
    }
    return sorted;
  }.property( "content.@each", "sortBy", "max").cacheable(),

});
console.log("defined Example.NavController");
