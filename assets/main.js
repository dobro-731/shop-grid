var string = "hello";
var number = 1;
var nl = null;
var undf = undefined;
var boo = true;
var user = {
    name: "john"
};
var func = function(){};

console.log(typeof (string));
console.log(typeof (number));
console.log(typeof (nl));
console.log(typeof (undf));
console.log(typeof (boo));
console.log(typeof (user));
console.log(typeof (func));

var result = prompt("Ты серьезно", "да");
var isAdmin = confirm("вы адинистратор?");

//логические опер !=(не равно) ==(равно) ||(или) &&(и) !(отрицание)   
if (isAdmin != true) {
    
}