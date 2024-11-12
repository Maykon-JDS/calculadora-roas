
import fecharAlert  from './fecharAlert.js';

function calcularRoas() {

  let faturamentoValor;

  isUndefined(faturamentoValor);

  faturamentoValor = document
    .querySelector("#faturamento")
    .value.replace(",", ".");

  let custoValor = document.querySelector("#custo").value.replace(",", ".");

  let resultado = document.querySelector(".resultado");

  try {

    validarValor(faturamentoValor, "Valor do faturamento inválido!");

    validarValor(custoValor, "Valor do custo inválido!");

    faturamentoValor = Number(faturamentoValor);

    custoValor = Number(custoValor);

    let calculo = ((faturamentoValor / custoValor) * 100).toFixed(2) + "%";

    resultado.innerText = calculo.replace(/\./, ",");

    fecharAlert();

  } catch (error) {

    resultado.innerText = "0,00" + "%";

  }

}

function validarValor(valor, msg) {

  if (isNaN(Number(valor)) || valor == "") {

    let alertBox = document.querySelector("#alert-box");

    let alertText = document.querySelector(".alert-text");

    alertBox.classList.remove("close");

    alertBox.classList.add("open");

    alertText.innerText = msg;

    throw new Error(msg);

  }

}

function isUndefined($value){

  if(typeof $value === 'undefined'){
    console.warn("undefined variable!");
  }

}

window.calculadora = {
  calcularRoas,
  fecharAlert
};