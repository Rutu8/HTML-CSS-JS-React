console.log("I am an External JS")
// Variables and Datatypes in JS
var person;//declare variable
var greeting;
person="John";//define variable
greeting="Hello"
console.log(greeting,person);//print the variable
//Variable Mutation
var schoolnumber=20;
schoolnumber="Twenty Two";
console.log(schoolnumber);
alert(schoolnumber);
//Operators: Arithmetic, Boolean Logic, Ternary
//var a;
//var b;
//var c;
//a=10;
//a=20;
c=10+20;
console.log(c); 
console.log(20>10);
var grade=42;
grade<45?console.log("You Cannot Got next class"):console.log("you can go to the next class")
var result=grade<45?"failure":"success";
console.log(result)

//Conditional Statement if statement and Switch statement
var grade;
grade=50;
if(grade<45)
{
    console.log("you are not passed");
}else if(grade>=45 && grade<"50")
{
    console.log("you are get KT");
}else{
    console.log("You Can go to next class");
}

