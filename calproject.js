let userInput = "";

function updateDisplay(){
    document.getElementById("userInputDisplay").value = userInput;
}
function appendCharacter(char){
    autoErase();
    userInput += char
    updateDisplay();
}

function calculateResult(){
    try{
        userInput = eval(userInput.toString());
        
        updateDisplay();
    }
    catch(error){
        userInput = "Error";
     //   clearInput()
    updateDisplay();
    setTimeout(()=>{
        clearInput()}, 5000)
    }
}



function clearInput(){
    userInput = "";
    
}
//to check if the current input is an error or a result
function autoErase(){
const lastChar = userInput.charAt(userInput.length -1);
    const isOperator = ["+","-","*","/"].includes(lastChar);
    if (userInput === "Error"|| !isOperator){
        userInput =""; // then clear the userInput
        updateDisplay();
        
    }
}


