const dob = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");


// date=12-04-2021 need to replace all the hyphens using replaceAll 

function calculateSum(dates){
    dates = dates.replaceAll("-","");
    let sum = 0;
    for(let i=0; i<dates.length; i++){
        sum = sum + Number(dates.charAt(i))
    }
    return sum;
}

function checkNumberIsLucky(){
    const dates = dob.value;
    const sum = calculateSum(dates);
    // validation
    if(sum && dates){
        compareValues(sum, luckyNumber.value);
    }
    else{
        outputBox.innerText = "Please enter both the fields 😡"
    }
}



function compareValues(sum, luckyNumber){
    if(sum % luckyNumber === 0){
        // giving values to the textarea
        outputBox.innerText ="Your birthday is lucky 🎉";
    }
    else{
        //giving values to the textarea
        outputBox.innerText="Your birthday is not so lucky 😟";
    }
}

checkButton.addEventListener("click", checkNumberIsLucky);