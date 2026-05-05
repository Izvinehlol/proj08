let numero = Number(prompt("Digite um número positivo:"));

while (numero < 0) {
    numero = Number(prompt("Valor inválido. Digite um número positivo:"));
}

alert("Número válido: " + numero);