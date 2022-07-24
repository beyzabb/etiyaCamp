//validation
function validate() {
    var numberEntered=document.getElementById("numberBox");
    if(numberEntered.checkValidity()==false){
        console.log("Try again")
    }
    else{
        console.log("Input is  okey")
    }


}