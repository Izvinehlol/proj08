let valor = Number(prompt("Digite o valor da compra (0 para finalizar):"));
let total = 0;

while (valor > 0 || valor < 0) { 
    total = total + valor;

    valor = Number(prompt("Digite outro valor (0 para finalizar):"));
}

alert("Total da compra: R$ " + total.toFixed(2));