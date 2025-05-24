function teste() {
    let numero;

    do {
        numero = parseInt(prompt("Digite um número ou 0 para sair:"));

        if (numero === 0) {
            alert("Você saiu do loop. até mais!");
            break;
        }
        if (numero % 2 === 0) {
            alert("O número é par;");
        } else {
            alert("O número é ímpar;");
        }
    } while (true);

}