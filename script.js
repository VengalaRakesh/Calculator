
// Adding a Button which is used to on and off the calculator 
function toggleButton(){
    var btnStatus=document.getElementById("status").value
    var buttons=document.getElementsByTagName("button")
    if(btnStatus=="OFF"){
        // If the calculator is currently off, turn it on
        document.getElementById("status").value="ON";
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = false
        }
    }
    else{
        // If the calculator is currently on, turn it off
        document.getElementById("status").value="OFF";
        // Clear the input field
        document.getElementById('tb').value = ''
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }
    }
}


// To display the content 
function fun(b){
    var x=document.getElementById('tb').value 
    // Concatenate the input value with the clicked button value
    x+=b
    document.getElementById('tb').value =x
}

// To calculate the square root 
function  squareRoot(){
    var x=document.getElementById('tb').value
    // Check if the input is not a number
    if(isNaN(x)){
        document.getElementById("tb").value = "Syntax error";
    }
    else{
        document.getElementById('tb').value =Math.sqrt(x)
    } 
}

// To calculate the cube root 
function  cubeRoot(){
    var x=document.getElementById('tb').value 
    // Check if the input is not a number
    if(isNaN(x)){
        document.getElementById("tb").value = "Syntax error";
    }
    else{
        document.getElementById('tb').value =Math.cbrt(x)
    } 
}

// To delete the the last character from the input value
function deleteCharacter(){
    var x=document.getElementById('tb').value 
    document.getElementById('tb').value=x.slice(0,x.length-1)
}


// To calculate the square of a number 
function square(){
    var x=document.getElementById('tb').value 
    document.getElementById('tb').value=Math.pow(eval(x),2);

}

//To Evaluate basic arithmetic expressions 
function equal(){
    var x=document.getElementById('tb').value 
    try {
        document.getElementById("tb").value = eval(x);
    } 
    catch (error) {
        // If there's a syntax error, display an error message
        document.getElementById("tb").value = "Syntax error";
    }
}
