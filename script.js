function calcularImc() {
  let nome = document.getElementById("nome").value;
  let altura = document.getElementById("altura").value;
  let peso = document.getElementById("peso").value;

  let imc;
  imc = (peso / (altura * altura)).toFixed(1);

  let situacaoImc;
  if (imc < 18.5)
    situacaoImc = "abaixo do peso";
  else if (imc < 25)
    situacaoImc = "com peso normal";
  else
    situacaoImc = "acima do peso";

  let resultado = document.getElementById("resultado");
  resultado.textContent = `${nome}, seu IMC é ${imc} e você está ${situacaoImc}.`;
}
