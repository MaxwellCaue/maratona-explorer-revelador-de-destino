// selecinando elemento HTML, querySelector procura no HTML o elemento com id=resposta
const elementoResposta = document.querySelector('#resposta')
//pegando a pergunta que vem por Input
const inputPergunta = document.querySelector('#inputPergunta')
//
const buttonPerguntar = document.querySelector('#buttonPerguntar')

const respostas = [
  'Certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.',
  'Vai Rolar!',
  'Só Deus sabe.'
]

//clicar em fazer pergunta
function fazerPergunta() {
  if (inputPergunta.value == '') {
    alert('Digite sua Pergunta')
    return
  }

  //desabilitando botão
  buttonPerguntar.setAttribute('disabled', true)

  //criando a div com a pergunta
  const pergunta = '<div>' + inputPergunta.value + '</div>'

  //gerar numero aleatório
  const totalRespostas = respostas.length //me dá o tatal de lementos da array
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
  // me dá um numero  de indice aleatório
  // Math.random da um nº aleatório de 0 - 0.9999...
  // que multiplicado por totalRespostas me dá um número entre 0 - 18.9999...
  // Math.floor arredonda para um numero inteiro para baixo

  //colocando resposta na tela
  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1

  //sumindo a resposta e reabilitando o botão
  setTimeout(function () {
    elementoResposta.style.opacity = 0
    buttonPerguntar.removeAttribute('disabled')
  }, 4000)
}
