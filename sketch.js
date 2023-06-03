//variaveis da bola
let Xbola = 300;
let Ybola = 200;
let Dbola = 23;
let Raio = Dbola /2;

//velocidade da bola
let VelocidadeXbola = 12;
let VelocidadeYbola = 6;

// variaveis da raquete
let Xraquete = 3;
let Yraquete = 150;
let Comprimento_raquete = 10;
let Altura_raquete = 100;
let colisao = false;

// variaveis da raquete CPU
let XraqueteCPU = 585;
let YraqueteCPU = 150;
let velocidadeYcpu ;

// Placar
let pontosPlayer = 0;
let pontosCPU = 0;


////////////////////////////////// INICIO//////////////////////////////////////////
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  Bola();  
  Movimentaçao_bola();
  Colisao_borda();
  Raquete_player(Xraquete, Yraquete);
  movimentaçaoRaquete();
  colisaoRaquete();
  //colisaoRacketBlibio();
  //RaqueteCPU();
  Raquete_player(XraqueteCPU, YraqueteCPU);
  movRaqueteCPU();
  colisaoRaqueteCPU();
  Placar ();
  Pontos();
  reset();
}

function Bola (){
  circle(Xbola,Ybola,Dbola);
}

function Movimentaçao_bola(){
  Xbola += VelocidadeXbola;
  Ybola += VelocidadeYbola;
}

function Colisao_borda(){
  if (Xbola + Raio > width || Xbola - Raio < 0) {
    VelocidadeXbola *= -1;
  }
  if (Ybola + Raio > height || Ybola - Raio < 0) {
    VelocidadeYbola *= -1;
  }
}

function Raquete_player(x,y){
    rect(x,y,Comprimento_raquete,Altura_raquete);
}
////////////////////////////////////////////////////////////////
//function RaqueteCPU(){
    //rect(XraqueteCPU,YraqueteCPU,Comprimento_raquete,Altura_raquete);
//}
/////////////////////////////////////////////////
function movimentaçaoRaquete(){
  if (keyIsDown(UP_ARROW)){
    Yraquete -= 15;
  }
  if (keyIsDown(DOWN_ARROW)){
    Yraquete += 15;
  }
}

function colisaoRaquete(){
if (Xbola - Raio < Xraquete + Comprimento_raquete && Ybola - Raio < Yraquete + Altura_raquete && Ybola + Raio > Yraquete){
  VelocidadeXbola *= -1;
 }
}

function colisaoRaqueteCPU(){
if (Xbola + Raio * 1.90 > XraqueteCPU + Comprimento_raquete && Ybola - Raio < YraqueteCPU + Altura_raquete && Ybola + Raio > YraqueteCPU){
 VelocidadeXbola *= -1;
 }
}


function colisaoRacketBlibio(){
 colisao = collideRectCircle(Xraquete, Yraquete, Comprimento_raquete, Altura_raquete, VelocidadeXbola, VelocidadeYbola, Raio);
  if (colisao){
    VelocidadeYbola *= -1;
  }
}

function movRaqueteCPU(){
  velocidadeYcpu = VelocidadeYbola *0.300 *1.990;
  YraqueteCPU += velocidadeYcpu;
}

function Placar(){
  fill(255);
  text ( pontosPlayer ,200 , 26);
  text ( pontosCPU , 400, 26);
  
}

function Pontos (){
  if ( Xbola + Raio < 15 ){
    pontosCPU += 1;
  }
  if ( Xbola - Raio > 585){
    pontosPlayer += 1;
  }
}

function reset(){
  if ( Xbola > 600 || Xbola < 0){
    Xbola = 300;
  }
}