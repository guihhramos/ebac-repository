function calcularIMC() {
    // pegar valores
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    // converter para número
    peso = parseFloat(peso);
    altura = parseFloat(altura);

    // calcular IMC
    let imc = peso / (altura * altura);

    // mostrar resultado
    document.getElementById("resultado").innerText = "IMC: " + imc.toFixed(2);

    // classificação
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc < 35) {
        classificacao = "Obesidade grau I";
    } else if (imc < 40) {
        classificacao = "Obesidade grau II";
    } else {
        classificacao = "Obesidade grau III";
    }

    document.getElementById("classificacao").innerText = "Classificação: " + classificacao;
}