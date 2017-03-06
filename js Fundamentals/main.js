x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];
y = ["hello", "world", "JavaScript is Fun"];
function test(){
  for(var i = 0; i < x.length; i++ ){
    console.log(x[i]);
  }
  x.push(100);
  for (var j = 0; j < y.length; j++) {
    x.push(y[j]);
  }
  return x;
}
console.log(test());

// print sum **********************
function printNum(){
  sum = 0;
  for (var i = 1; i <= 500; i++) {
    sum = sum + i;
  }
  console.log(sum);
}
console.log(printNum());


// print minimum and avg *********
var arr = [1, 5, 90, 25, -3, 0];
function minimum(){
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


  // print all the key in the object
var newNinja = {
  name: 'Jessica',
  profession: 'coder',
  favorite_language: 'JavaScript', //like that's even a question!
  dojo: 'Dallas'
}

for (key in newNinja){
  console.log(key+":"+newNinja[key]);
}
