// Estrutura Base
var aluno = "Samuel"
var notaDoPrimeiroBimestre = 7.9
var notaDoSegunoBimestre = 9.8
var notaDoTerceiroBimestre = 3.7
var notaDoQuartoBimestre = 8.5

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegunoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4

var notaFixada = notaFinal.toFixed(1)

//console.log("Bem vindo " + nome)
//console.log(notaFixada)

//BONUS(1) - Desafio Rafaela: Mudar aparencia da página. Modificações foram realizadas na cor de fundo e com a imagem de exibição.

//BONUS(2) - Desafio Guilherme: Incluir mensagem se o aluno passou dependendo da média estabelecida. Maior ou igual 7 = APROVADO / Menor ou igual 6.9 = REPROVADO

if (notaFixada >= 7) {
  console.log(notaFixada + " APROVADO")
} else{
  console.log(notaFixada + " REPROVADO")
}

//BONUS(3) - Desafio Paulo: Exibir mensagem e efetuar operação em um único console.log

//console.log("Bem vindo " + nome + ". Sua nota é: " + ((notaDoPrimeiroBimestre + notaDoSegunoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre)/4).toFixed(1))



