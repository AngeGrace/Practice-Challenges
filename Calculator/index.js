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

document.addEventListener("keypress", function (event) {
        var keyValue = event.key;

        if (!isNaN(parseInt(keyValue)) || "+-*/".includes(keyValue)) {
            display(keyValue);
        } else if (keyValue === "Enter") {
            calculate();
        } else if (keyValue === "c" || keyValue === "C") {
            clearDisplay();
        }
    });
