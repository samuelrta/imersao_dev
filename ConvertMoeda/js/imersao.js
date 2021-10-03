function Converter() {
  var capturaElemento = document.getElementById("valor");
  var valorElemento = capturaElemento.value;
  var valorDolar = parseFloat(valorElemento);

  var convertReal = valorDolar * 5;
  var convertBitCoin = 0.0000039 * convertReal;
  var exibeConversao = document.getElementById("valorConvertido")
  var exibeResultadoReal = "Valor convertido em Real é R$" + convertReal
  var exibeResultadoBitCoin = " em BitCoin custa " + convertBitCoin
  exibeConversao.innerHTML = exibeResultadoReal + exibeResultadoBitCoin
  
}
