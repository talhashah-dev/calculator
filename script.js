let result = document.getElementById("output")
function screen(number){
    output.value += number;
}

function calculate(){
    let finalNumber = result.value;
    let finalResult = eval(finalNumber);
    result.value = finalResult;
}

function clear(){
    result.value = "";
}

function erase(){
    result.value = result.value.slice(0,-1);
}