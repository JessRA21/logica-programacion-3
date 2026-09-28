function calcularFactorial() {
    let numero;
    let entrada;

    while (true) {
        entrada = prompt("Por favor, ingresa un número entero positivo para calcular su factorial:");

        if (entrada === null || entrada.trim() === "") {
            alert("Error: No ingresaste ningún valor. Inténtalo de nuevo.");
            continue;
        }
   
        numero = Number(entrada);
     
        if (isNaN(numero) || !Number.isInteger(numero) || numero < 0) {
            alert("Error: El dato ingresado no es un número válido. Inténtalo de nuevo.");
        } else {
            break;
        }
    }

    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    
    console.log(`El factorial de ${numero} es: ${factorial}`);
    
    const resultadoDOM = document.getElementById("resultado");
    if (resultadoDOM) {
        resultadoDOM.innerHTML = `El factorial de <strong>${numero}</strong> es: <br><span style="font-size: 1.6rem; color: #db2777;">${factorial}</span>`;
    }
}

window.onload = function() {
    calcularFactorial();
};