function calculator(a, b, operator) {
    let result;

    if (operator === "+") {
        result = a + b;
    } else if (operator === "-") {
        result = a - b;
    } else if (operator === "*") {
        result = a * b;
    } else if (operator === "/") {
        result = a / b;
    } else if (operator === "**") {
        result = a ** b;
    } else if (operator === "%")
        result = a%b; {
        return "invalid";
    }

    // return result with 2 decimal places
    return result.toFixed(2);
}

console.log(calculator(25,50 , "*")); 


