let result = document.getElementById("output")
function screen(number){
    output.value += number;
}

function calculate(){
    let final_number = result.value;
    let final_result = eval(final_number);
    result.value = final_result;
}

function clear(){
    result.value = "";
}

function erase(){
    result.value = result.value.slice(0,-1);
}