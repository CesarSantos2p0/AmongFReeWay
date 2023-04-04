//imagens e Sons do jogo

var imagemDaEstrada;

//Sons

var somDaTrilha;
var somDaColisao;
var somDosPontos;

function preload(){
    imagemDaEstrada = loadImage("imagens/estrada.png");
    imagemDoPersonagem = loadImage("imagens/among.png");
    imagemCarro1 = loadImage("imagens/nave-1.png");
    imagemCarro2 = loadImage("imagens/nave-2.png");
    imagemCarro3 = loadImage("imagens/nave-3.png");
    imagemCarro4 = loadImage("imagens/nave-4.png");
    imagemCarro5 = loadImage("imagens/nave-5.png");
    imagemCarro6 = loadImage("imagens/nave-6.png");
    imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro4, imagemCarro5, imagemCarro6];
    
    somDaTrilha = loadSound("sons/trilha.mp3");
    somDosPontos = loadSound("sons/pontos.wav");
    somDaColisao = loadSound("sons/colidiu.mp3");
}
