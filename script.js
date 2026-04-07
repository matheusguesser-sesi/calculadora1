function calcular() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let operacao = document.getElementById("operacao").value

    let resultado = 0;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Garanta que os dois números foram informados corretamente!")
    }

    if ((num1 === 0 || num2 === 0) && operacao === "divisao") {
        alert("Impossível dividir por ZERO!")
    }

    if (operacao === "soma") {
        resultado = num1 + num2;
    }

    if (operacao === "subtracao") {
        resultado = num1 - num2;
    }

    if (operacao === "multiplicacao") {
        resultado = num1 * num2;
    }

    if (operacao === "divisao") {
        resultado = num1 / num2;
    }

    document.getElementById("resultado").textContent = resultado;
}