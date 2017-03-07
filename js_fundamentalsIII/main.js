function myFunc(name) {

    var person = {
    name: name,
    distance_traveled: 0,
    say_name: function(){console.log(name);},
    say_something: function(phrase) { console.log(person.name + " says: " + phrase);},
    walk: function() {console.log(person.name + " is walking!"); person.distance_traveled += 3; return person;},
    run:function() {console.log(person.name + " is running!"); person.distance_traveled += 10; return person;},
    crawl: function() {console.log(person.name + " is crwling!"); person.distance_traveled += 1; return person;},
  }
  return person.walk();
}
console.log(myFunc('Nelu'));

function ninjaConstructor(name, cohort){
  var ninja = {}
  var belts = ["Yellow","red","black"]
  ninja.name = name;
  ninja.cohort = cohort;
  ninja.beltLevel = 0;
  ninja.levelUp = function(){
    if(ninja.beltLevel < 2){
      ninja.beltLevel += 1;
      ninja.belt = belts[ninja.beltLevel];
    }
    return ninja.name
  }
  ninja.belt = belts[ninja.beltLevel];
  return ninja;
 }

ninjaConstructor('Yogi', 'winter');
