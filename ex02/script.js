let nota = Number(prompt("Digite uma nota (0 a 10) ou negativo para sair:"));
let soma = 0;
let contador = 0;

while (nota >= 0) {

    while (nota < 0 || nota > 10) {
        nota = Number(prompt("Nota inválida. Digite uma nota entre 0 e 10:"));
    }

    soma = soma + nota;
    contador = contador + 1;

    nota = Number(prompt("Digite outra nota (0 a 10) ou negativo para sair:"));
}

if (contador > 0) {
    alert("Média: " + (soma / contador).toFixed(2));
} else {
    alert("Nenhuma nota válida.");
}