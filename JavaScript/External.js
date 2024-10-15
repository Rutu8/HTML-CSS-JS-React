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

var day;
day='monday';
switch(day){
    case 'saturday':
        console.log('I like Saturday');
        break;
    case 'monday':
        console.log('I do not like monday');
        break;
    case 'tuesday':
            console.log('I feel do not feel fresh');
            break;
    case 'wensday':
            console.log('welcome to wensday');
            break;
    case 'thursday':
            console.log('thursday feeling better');
            break;
    case 'friday':
        console.log('I really like friday because tommarrow day after is sunday');
        break;
    default:
        console.log('I do not know day');
        break;   
}

//Loops in Statement
//1)while loop
//2)for loop
var num=1;
while(num<11){
    console.log(num);
    num++;//num=num+1
}

for(var number=1; number<11; number++)
{
    console.log(number);
}
//3)Contunue with break statements in javascript
console.log('Contunue statements');
for(var i=1;i<=10;i++){
    if(i%2!==0)
        continue;
        console.log(i);
}
console.log('break statement')
for(var i=1; i<=10;i++)
{
    if(i%2==0){
        console.log(i);
        break;
    }
}


//Functions
