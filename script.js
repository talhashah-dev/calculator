let result = document.getElementById("output");

let calculate = (number) => {
  result.value += number;
};

let equal = () => {
  try {
    result.value = eval(result.value); // it does the calculation
  } catch (err) {
    alert("Please enter a valid Input!"); // by passign an invalid input it will show an error in the alert box
  }
};

function allClear() {
  result.value = "";
}

function del() {
  result.value = result.value.slice(0, -1);
}
