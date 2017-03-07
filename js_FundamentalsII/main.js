function printSum(){
  sum = 0;
  for (var i = 1; i <= 500; i++) {
    sum = sum + i;
  }
  console.log(sum);
}
console.log(printSum());
/*** print sum (anonymous function) ***/
var printSum = function(){
  sum = 0;
  for (var i = 1; i <= 500; i++) {
    sum = sum + i;
  }
  console.log(sum);
}
console.log(printSum());

/*** print min and average (anonymous function) ***/
var arr = [1, 5, 90, 25, -3, 0];
var minimum = function(){
  var min = arr[0];
  var sum = 0;
  var avg;
  for (var i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    sum = sum + arr[i];
  }
  avg = sum/arr.length;
  console.log(min);
  console.log(avg);
}
console.log(minimum());
/***** Rewrite these as methods of an object *****/
var object = {
  printSum: function(x, y){
    sum = 0;
    for (var x = 1; i <= y; i++) {
      sum = sum + i;
    }
  },
  minimum: function(arr){
    var min = arr[0];
    var sum = 0;
    var avg;
    for (var i = 0; i < arr.length; i++) {
      if (min > arr[i]) {
        min = arr[i];
      }
      sum = sum + arr[i];
    }
    avg = sum/arr.length;
  }
}

var arr = [1, 5, 90, 25, -3, 0];
function minimum(){    /***** print minimum and average *****/
  var min = arr[0];
  var sum = 0;
  var avg;
  for (var i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    sum = sum + arr[i];
  }
  avg = sum/arr.length;
  console.log(min);
  console.log(avg);
}
console.log(minimum());

/*** Create a JavaScript object called person ***/

var person = {
  name: "Ion Goiman",
  distance_traveled: 0,
  say_name: function(){console.log(person.name);},
  say_something: function(phrase) { console.log(person.name + " says: " + phrase);},
  walk: function() {console.log(person.name + " is walking!"); person.distance_traveled += 3; return person;},
  run:function() {console.log(person.name + " is running!"); person.distance_traveled += 10; return person;},
  crawl: function() {console.log(person.name + " is crwling!"); person.distance_traveled += 1; return person;},
}
person.walk().run();
