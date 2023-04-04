
var xCarros = [600, 600, 600, 600, 600,600];
var yCarros = [40, 100, 150, 210, 270,318];
var velocidadeCarros = [5, 3, 6, 4, 5, 6.5];
var wCarros = 50;
var hCarros = 40;

function movimentoCarro(){
  for(var i =0; i < imagemCarros.length; i += 1){
     xCarros[i] -= velocidadeCarros[i];
  }
}

function mostraCarros(){
    for(var i = 0; i < imagemCarros.length; i += 1){
   image(imagemCarros[i],xCarros[i],yCarros[i],wCarros,hCarros);
   }
 }
function voltaPosicaoDoCarro(){
    for(var i = 0; i < imagemCarros.length; i += 1){
      if(passouTodaTela(xCarros[i])){
        xCarros[i] = 600;
    }
    }
}

function passouTodaTela(xCarros){
    return xCarros < -50;
}