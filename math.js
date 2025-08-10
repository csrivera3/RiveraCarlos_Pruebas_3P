// Función para calcular el factorial de un número
function factorial(n) {
    if (n < 0) return undefined; // No existe factorial de negativos
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// Función para calcular el n-ésimo número de Fibonacci
function fibonacci(n) {
    if (n < 0) return undefined; // No existe para negativos
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Exportar funciones
module.exports = { factorial, fibonacci };
