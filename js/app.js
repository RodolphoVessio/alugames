
function alterarStatus(id) {
   let gameClicado = document.getElementById(`game-${id}`);
   let imagem = gameClicado.querySelector('.dashboard__item__img');
   let botao = gameClicado.querySelector('.dashboard__item__button');
   let clikAlugar = 'alugar';
   let quantidadeCliks = 1;

  
   
  if (imagem.classList.contains('dashboard__item__img--rented')) {
   if (confirm(`Você tem certeza que deseja devvolver o jogo`))
      imagem.classList.remove('dashboard__item__img--rented');
      botao.classList.remove('dashboard__item__button--return');
      botao.textContent = 'alugar';
     
      quantidadeCliques++
  } else {
      imagem.classList.add('dashboard__item__img--rented');
      botao.classList.add('dashboard__item__button--return');
      botao.textContent = 'Devolver';
  }

  
  console.log(`${quantidadeCliks}`);

   
}
