

function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  movimentaAtor();
  movimentoCarro();
  mostraAtor();
  mostraCarros();
  voltaPosicaoDoCarro();
  verificaColisao();
  somaPontos();
  incluiPontos();
}