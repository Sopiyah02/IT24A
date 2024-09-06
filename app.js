//Data types
//integers
let a = 19;

//Float
let b = 20;

//string
let c = "hello!";

//Boolean
let d = true;

console.log(typeof a); //number
console.log(typeof b); //number
console.log(typeof c); //string
console.log(typeof d); //boolean

//arithmetc

let a = 10;
let b = 10;

console.log (a + b); //addition
console.log (a - b); //subtraction
console.log (a * b); //multiplacation
console.log (a / b); //division

//logical operators 

let x = true;
let y = false;

console.log (x && y); //logical and
console.log (x || y); //logical or
console.log (!x); //logical not

//if else

let num = 10;

if (num > 0) {
    console.log("Positive number");
} else if (num === 0){
 console.log("Zero");
}else{ 
    comsole.log("Negative number")
}

//switch
function get(day){
    let day = 2;
    console.log(getNameday(Day));
    switch (Day){
        case 1:
            return "Mondy";
            break;
            case 2:
                return "Tuesday";
                break;
                case 3:
                    return "Wensday";
                    break;
                    default:
                        return "Invalid Day";
                        break;
    }
}

//loops

for (let i = 0; i <5; i++){
    console.log(i);
}

//while loop
let i = 0;
while (i < 5){
    console.log(i);
    i++;
}

//odd or even 

function isEven(num) {
    return % 2 === 9;
}
function isOdd(num){
}
console.log(isEven(4)); //true
console.log(isOdd(5)); //true




