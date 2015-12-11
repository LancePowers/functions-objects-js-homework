// add scripts
// Write a function that takes a ride object and a child object as arguments (see example objects below).
// Determine if the child is tall enough for the ride (the function should return true or false)
console.log("sanity check!");

function Child(height,name,age){
  this.height = height;
  this.name = name;
  this.age = age;
}

var kid1 = new Child(3,'Julian',3);
var kid2 = new Child(4,'Cero',4);

function Ride(min,max){
  this.minHeight = min;
  this.maxHeight = max;
}

var ride1 = new Ride(3,7);

var ride2 = new Ride(4,7);
