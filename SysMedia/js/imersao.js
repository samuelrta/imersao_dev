function CalculaMedia() {
  var notaPrimeiroElemento = document.getElementById("nota1");
  var nota = notaPrimeiroElemento.value;
  var notaPrimeiro = parseFloat(nota);

  var notaSegundoElemento = document.getElementById("nota2");
  var nota = notaSegundoElemento.value;
  var notaSegundo = parseFloat(nota);

  var notaTerceiroElemento = document.getElementById("nota3");
  var nota = notaTerceiroElemento.value;
  var notaTerceiro = parseFloat(nota);

  var somaMedia = ((notaPrimeiro + notaSegundo + notaTerceiro) / 4).toFixed(1);

    if (somaMedia >= 7) {
      var elementoResultadoMediaAprovado = document.getElementById("ResultadoMediaAprovado");
      var resultadoMedia = "Sua média é " + somaMedia + " - APROVADO"
      elementoResultadoMediaAprovado.innerHTML = resultadoMedia
    } else  {
      var elementoResultadoMediaReprovado = document.getElementById("ResultadoMediaReprovado");
      var resultadoMedia = "Sua média é " + somaMedia + " - REPROVADO"
      elementoResultadoMediaReprovado.innerHTML = resultadoMedia
    }    
}
  
  
  