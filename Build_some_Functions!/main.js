function runningLogger() {
  var anywhere = "I am running!"
  console.log(anywhere);
}
runningLogger();
/***************************************/
function myFunctionRunner(param){
  if (typeof(param)=='function'){
    param();
  }
}
/***************************************/
function stringReturnOne() {
  var my_string = "I'll be the best in coding!";
  console.log(my_string);
}
stringReturnOne();
/****************************************/
function stringReturnTwo() {
  var my_string2 = "This is easy!";
  console.log(my_string2);
}
stringReturnTwo();
/*****************************************/
function caller(parameter) {
  if (typeof(parameter) == 'function') {
    parameter();
  }
}
/*****************************************/
function myDoubleConsoleLog(par1, par2){
  if (typeof(par1) == 'function' && typeof(par2) == 'function') {
    console.log(par1, par2);
  }
}
myDoubleConsoleLog(stringReturnOne, stringReturnTwo);
/******************************************/
function caller2(param) {
  console.log('starting');
  var x =setTimeout(function() {
    if (typeof(param) == 'function') {
      param(stringReturnOne, stringReturnTwo);
    }
  }, 2000);
  return 'interesting';
}
caller2(myDoubleConsoleLog);
