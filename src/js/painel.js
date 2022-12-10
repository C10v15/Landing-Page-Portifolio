const imagens = document.querySelectorAll('.imagem-painel');
const setaVoltar = document.getElementById('btn-voltar');
const setaAvancar = document.getElementById('btn-avancar');
let imagemAtual = 0;

function esconderImagens(){
    imagens.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
}
function mostrarImagem(){
    imagens[imagemAtual].classList.add('mostrar');
}


setaAvancar.addEventListener('click', function() {
    const totalDeImagens = imagens.length - 1;
    if(imagemAtual === totalDeImagens) {
        return;
    }
   imagemAtual++;
   esconderImagens();
   mostrarImagem();
   mostrarOuEsconderSetas();  
 
     });

   setaVoltar.addEventListener('click', function(){
    if(imagemAtual === 0) {
        return;
    }
    imagemAtual--;
    esconderImagens();
    mostrarImagem();
    mostrarOuEsconderSetas(); 
   });

function mostrarOuEsconderSetas(){
   
    const naoEhAPrimeiraImagem = imagemAtual !== 0;
    if (naoEhAPrimeiraImagem) {
        setaVoltar.classList.remove("opacidade");
    } else {
        setaVoltar.classList.add("opacidade");
    }

    const chegouNaUltimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length - 1;
    if (chegouNaUltimaImagem) {
        setaAvancar.classList.add("opacidade");
        
    } else {
        setaAvancar.classList.remove("opacidade");

    }
}