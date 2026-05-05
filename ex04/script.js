let nome = prompt("Digite seu nome:");

while (nome == "") {
    nome = prompt("Nome inválido. Digite seu nome:");
}

let sobrenome = prompt("Digite seu sobrenome:");

while (sobrenome == "") {
    sobrenome = prompt("Sobrenome inválido. Digite seu sobrenome:");
}

alert("Nome completo: " + nome + " " + sobrenome);