// //for loop
// for (let i = 0; i <= 10; i++) {
//     alert(i)
// }

// //break-continue
// for (let i = 0; i <= 10; i++) {
//     if(i==5){
//         break;
//     }
//     alert(i)
// }

// for (let i = 0; i <= 10; i++) {
//     if(i==5){
//         continue;
//     }
//     alert(i)
// }

// //while loop
// var num=1;
// while (num<10) {
//     alert(num)
//     num++    
// }

//do-while loop
var age=prompt("Your age?")
var result=""
do {
    result+=age
    result+="-"
    age--;
    
} while (age>0);
alert(result)