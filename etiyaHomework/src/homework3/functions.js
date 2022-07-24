//events
function eventCode(){
    alert("Event Code Run")
}

//function signature
//function with return
function functionName(parameter1, parameter2){
    //do something
    return parameter1*parameter2;
}
alert(functionName(2,6));

//function without return
function functionName2(parameter1, parameter2){
    //do something
    console.log("Function without return is working")
}
functionName2() //fonksiyon çağrılmadan çalışmaz

//parameter defaults
function parameterFunction(x,y){
    if(y===undefined){
        y=0
    }
}
parameterFunction(5) //x=5,y=0
parameterFunction(5,7) //x=5,y=7

//arguments object
function findMax() {
    var i,max=0
    for(i=0;i<arguments.length;i++){
        if(arguments[i]>max){
            max=arguments[i]
        }
    }
    return max;
}

console.log(findMax(1,15,98,5,78))

