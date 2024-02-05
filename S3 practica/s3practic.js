// Ejercicio 1: Calculadora de Velocidad
function calcularVelocidad() {
    var distancia = document.getElementById('distancia').value;
    var tiempo = document.getElementById('tiempo').value;

    // Convertir la distancia a metros y el tiempo a segundos
    var velocidad = (distancia * 1000) / (tiempo * 60);

    document.getElementById('resultadoVelocidad').innerText = "Velocidad: " + velocidad.toFixed(2) + " m/s";
}



// Ejercicio 2: se clasifican los triangulos
function clasificarTriangulo() {
    var lado1 = parseFloat(document.getElementById('lado1').value);
    var lado2 = parseFloat(document.getElementById('lado2').value);
    var lado3 = parseFloat(document.getElementById('lado3').value);

    if (lado1 === lado2 && lado2 === lado3) {
        document.getElementById('resultadoTriangulo').innerText = "Triángulo equilátero";
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        document.getElementById('resultadoTriangulo').innerText = "Triángulo isósceles";
    } else {
        document.getElementById('resultadoTriangulo').innerText = "Triángulo escaleno";
    }
}


// Ejercicio 3: Calculadora Simple
function calcularOperacion(operacion) {
    var n1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    var resultado;

    switch (operacion) {
        case 'suma':
            resultado = n1 + n2;
            break;
        case 'resta':
            resultado = n1 - n2;
            break;
        case 'multiplicacion':
            resultado = n1 * n2;
            break;
        case 'division':
            if (n2 !== 0) {
                resultado = n1 / n2;
            } else {
                resultado = "Error: División por cero";
            }
            break;
    }

    document.getElementById('resultadoCalculadora').innerText = "Resultado: " + resultado;
}



// Ejercicio 4:  si un número es primo esPrimo

function verificarPrimo() {
    var numPrimo = parseInt(document.getElementById('numeroPrimo').value);

    if (esPrimo(numPrimo)) { // se evalua la funcion
        document.getElementById('resultadoPrimo').innerText = numPrimo + " es un número primo.";
    } else {
        document.getElementById('resultadoPrimo').innerText = numPrimo + " no es un número primo.";
    }
}

// funcion para verificar que el número es primo esPrimo
function esPrimo(numero) { 
    if (numero <= 1) return false;

    for (var i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}