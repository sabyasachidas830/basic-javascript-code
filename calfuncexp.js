const calculator = function(a, b, operator) {
    switch(operator) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return a / b;
        case "**": return a ** b;
        case "%": return a % b;
        default: return "invalid";
    }
}

console.log(calculator(10,8,"+")); // 18
