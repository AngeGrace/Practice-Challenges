function display(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    var result;
    try {
        result = eval(document.getElementById("display").value);
    } catch (error) {
        result = "Error";
    }
    document.getElementById("display").value = result;
}