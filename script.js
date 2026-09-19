let saldoInicial = 1000;
let escolha;

do {
    console.log("Conta bancaria");
    console.log("1 - depositar");
    console.log("2 - sacar");
    console.log("3 - finalizar");

    escolha = prompt("escolha uma opcao disponivel");

    if (escolha == "1") {

        let quantia = Number(prompt("escreva uma quantia para depositar"));

        saldoInicial += quantia;

        console.log("deposito pronto");
        alert("saldo disponivel: R$ " + saldoInicial.toFixed(2));
    } else if (escolha == "2") {

        let quantia = Number(prompt("digite um valor para sacar"));

        if (quantia <= saldoInicial) {
            saldoInicial -= quantia;
            alert("saque realizado");
        } else {
            alert("saldo insuficiente");
        }

        alert("saldo atual: R$ " + saldoInicial.toFixed(2));
    } else if (escolha == "3") {
        alert("programa encerrado");
    } else {
        alert("opcao indisponivel");
    }
} while (escolha != "3");


