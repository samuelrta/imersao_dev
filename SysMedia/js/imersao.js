function CalculaMedia() {
  var notaPrimeiro = parseFloat(document.getElementById("nota1").value);
  var notaSegundo = parseFloat(document.getElementById("nota2").value);
  var notaTerceiro = parseFloat(document.getElementById("nota3").value);

// == Antes o passo a passo para pegar um valor do input ==
  //var notaTerceiroElemento = document.getElementById("nota3");
  //var nota = notaTerceiroElemento.value;
  //var notaTerceiro = parseFloat(nota);
// ======

  var somaMedia = ((notaPrimeiro + notaSegundo + notaTerceiro) / 4).toFixed(1);
      
    if (somaMedia >= 7 && somaMedia <= 10) {
      var elementoResultadoMediaAprovado = document.getElementById("ResultadoMediaAprovado");
      var resultadoMedia = "Sua média é " + somaMedia + " - APROVADO"
      elementoResultadoMediaAprovado.innerHTML = resultadoMedia
    } else if (somaMedia >= 0 && somaMedia < 7)  {
      var elementoResultadoMediaReprovado = document.getElementById("ResultadoMediaReprovado");
      var resultadoMedia = "Sua média é " + somaMedia + " - REPROVADO"
      elementoResultadoMediaReprovado.innerHTML = resultadoMedia
    } else {
    var elementoResultadoMediaReprovado = document.getElementById("ResultadoMediaReprovado");
    var resultadoMedia = "Média invalida. Precisa ficar entre 0 - 10"
    elementoResultadoMediaReprovado.innerHTML = resultadoMedia
    }
}

function Limpar(){
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";

    elementoResultadoMediaReprovado = document.getElementById("ResultadoMediaReprovado");
    elementoResultadoMediaAprovado = document.getElementById("ResultadoMediaAprovado");
    resultadoMedia = ""
    elementoResultadoMediaReprovado.innerHTML = resultadoMedia
    elementoResultadoMediaAprovado.innerHTML = resultadoMedia
  }