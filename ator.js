// ator do game

var imagemDoPersonagem;
var yAtor = 370;
var xAtor = 100;
var colisao = false;
var meusPontos = 0;


function mostraAtor(){
    image(imagemDoPersonagem,xAtor, yAtor,30,30);

}

function movimentaAtor(){
    if(keyIsDown(UP_ARROW)){
        yAtor -= 3;
    }
    if(keyIsDown(DOWN_ARROW)){
        if(podeSeMover()){
        yAtor += 3; 
        }
    }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], wCarros, hCarros, xAtor, yAtor, 15)
    if (colisao){
      colidiu();
    }
  }
}

function voltaPsicaoInicial(){
    yAtor = 370;
}

function colidiu(){
  somDaColisao.play();
  voltaPsicaoInicial();
  meusPontos = 0;
}

function somaPontos(){
  if(yAtor < 15){
    meusPontos+=1
    voltaPsicaoInicial();
    somDosPontos.play();
  }
}

function incluiPontos(){
  textSize(25)
  fill(255,255,0);
  text(meusPontos, width /5, 25);
}

function podeSeMover(){
    return yAtor < 370;
}