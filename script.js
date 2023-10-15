let result = "0";

function appendToResult(value) {
    if (result === "0" && value !== ".") {
        result = "";
    }
    result += value;
    updateDisplay();
}

function clearResult() {
    result = "0";
    updateDisplay();
}

function calculateResult() {
    try {
        result = eval(result).toString();
    } catch (error) {
        result = "Error";
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("result").innerText = result;
}
