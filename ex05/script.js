let saldo = 1000;

while (saldo > 0) {
    alert("Saldo atual: R$ " + saldo.toFixed(2));

    let saque = Number(prompt("Digite o valor do saque:"));

    if (saque <= saldo) {
        saldo = saldo - saque;
    } else {
        alert("Saldo insuficiente.");
    }
}

alert("Conta encerrada. Saldo final: R$ " + saldo.toFixed(2));