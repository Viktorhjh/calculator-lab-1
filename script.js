const input = document.getElementsByName("result");

function number(n) {
    input[0].value += n;
}

function clearAll() {
    input[0].value = "";
}

function action(act) {
    switch (act) {
        case "+":
            input[0].value += "+";
            break;
        case "-":
            input[0].value += "-";
            break;
        case "*":
            input[0].value += "*";
            break;
        case "/":
            input[0].value += "/";
            break;
        case "+-":
            input[0].value = eval(input[0].value*(-1));
            break;
    }
    act = true;
}

function result() {
    input[0].value = eval(input[0].value);
}