let nomeUsario = prompt("Digite seu nome:");
alert("Olá " + nomeUsario + ", bem-vindo ao nosso site!");
let valor = 0;
let operacaoAtual = '';
let resposta = document.getElementById("resposta");

function verSaldo() {
  resposta.innerText = "Seu saldo é de R$ " + valor.toFixed(2);
  operacaoAtual = '';
  esconderCampoPix();
}

function deposito() {
  operacaoAtual = 'deposito';
  resposta.innerText = "Digite o valor para depósito e clique em Confirmar.";
  agradecimento.innerText = "Obrigado por usar nosso sistema!";
  esconderCampoPix();
}

function saque() {
  operacaoAtual = 'saque';
  resposta.innerText = "Digite o valor para saque e clique em Confirmar.";
  agradecimento.innerText = "Obrigado por usar nosso sistema!";
  esconderCampoPix();
}

function pix() {
  operacaoAtual = 'pix';
  resposta.innerText = "Digite o valor e a chave PIX, depois clique em Confirmar.";
  agradecimento.innerText = "Obrigado por usar nosso sistema!";
  document.getElementById("campoChavePix").classList.remove("hidden");
}

function esconderCampoPix() {
  document.getElementById("campoChavePix").classList.add("hidden");
  document.getElementById("campoChavePix").value = '';
}

function executarOperacao() {
  let campoValor = document.getElementById("campoValor").value.trim();
  let campoChave = document.getElementById("campoChavePix").value.trim();
  let numero = Number(campoValor);

  if (campoValor === '' || isNaN(numero) || numero <= 0) {
    resposta.innerText = "Por favor, digite um valor maior que zero.";
    return;
  }

  if (operacaoAtual === 'deposito') {
    valor += numero;
    resposta.innerText = "Depósito realizado! Novo saldo: R$ " + valor.toFixed(2);
  } else if (operacaoAtual === 'saque') {
    if (numero > valor) {
      resposta.innerText = "Saldo insuficiente para saque.";
    } else {
      valor -= numero;
      resposta.innerText = "Saque realizado! Novo saldo: R$ " + valor.toFixed(2);
    }
  } else if (operacaoAtual === 'pix') {
    if (campoChave === '') {
      resposta.innerText = "Informe a chave PIX.";
    } else if (numero > valor) {
      resposta.innerText = "Saldo insuficiente para PIX.";
    } else {
      valor -= numero;
      resposta.innerText = `PIX de R$ ${numero.toFixed(2)} enviado para ${campoChave}. Saldo atual: R$ ${valor.toFixed(2)}.`;
    }
  } else {
    resposta.innerText = "Selecione uma operação antes de confirmar.";
  }

  document.getElementById("campoValor").value = '';
  document.getElementById("campoChavePix").value = '';
}
