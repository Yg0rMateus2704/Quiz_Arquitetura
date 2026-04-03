
var tela = 1; //começa na tela inicial
var cliqueX = 0; //para guardar a posição do mouse ao mudar de tela
var cliqueY = 0; 

var posXJerryJogoJerry = 50;
var posYJerryJogoJerry = 55;
var velJerryJogoJerry = 1.5;
var tamXJerryJogoJerry = 18;
var tamYJerryJogoJerry = 20;

var posXJerryJogoTom = 300;
var posYJerryJogoTom = 200;
var velXJerryJogoTom = 1.2;
var velYJerryJogoTom = -0.7;
var cliqueJerryJogoTom = 0; //contador pontos
var timer = 31; //temporizador

var status = 0;
var cliqueX = 0;
var cliqueY = 0;
var cliquex = 0;
var cliquey = 0;
var cliqueX1 = 0;
var clliqueY1 = 0;

var img = 0;
function preload(){
  img = loadImage("start.png");
  img1 =  loadImage("2.png")
  classica = loadImage ("4.png")
  gameover = loadImage ("gameover.png")
  dicaclassica = loadImage ("classicaD.png")
  //barroco =  loadImage ("barroco.png")
  //barrocodica = loadImage ("barrocoD.png")
  romanica =  loadImage ("7.png")
  //neoclas = loadImage ("neo.png")
  bruta =  loadImage ("27.png")
  //beaux = loadImage ("beaux.png")
  contemp =  loadImage ("17.png")
  //deco = loadImage ("deco.png")
  moderno = loadImage ("21.png")
  gotico= loadImage ("13.png")
  //pos = loadImage ("pormoderno.png")
  //novo = loadImage("nouveaux.png")
  vitoria = loadImage("vitória.png")
  
  //DICAS
  dicacontemp = loadImage("contempD.png")
  dicamoder =  loadImage("modernaD.png")
  goticoD = loadImage("gd.png")
  brutoD =  loadImage("brutaD.png")
  romanicaD = loadImage("romd.png")
  
  
  
  
  
}


function setup() {
  createCanvas(600, 500);
}

function draw() {
  background(220);

  if (status == 0) {
    fase0();
  }
  if (status == 1) {
    fase1();
  }
  if (status == 2) {
    fase2();
  }
  if (status == 3) {
    fase3();
  }
  if (status == 4) {
    fase4();
  }
  
  //romanico
  if (status == 5) {
    fase5();
  }
  
  //dica romanico
  if (status == 6) {
    fase6();
  }
  
  //desafio romanico
  if (status == 7) {
    fase7();
  }
  
  //barroco
  if (status == 8) {
    fase8();
  }
  
  //dica barroco
  if (status == 9) {
    fase9();
  }
  
  //desafio barroco
    if (status == 10) {
    fase10();
  }
  
  //neoclas
 if (status == 11) {
    fase11();
  }
  
  //dica neocla
  if (status == 12) {
    fase12();
  }
  
  //desafio neoclas
  if (status == 13) {
    fase13();
  }
  
  //gotica
  if (status == 14) {
    fase14();
  }
  
  //dica otica
  if (status == 15) {
    fase15();
  }
  
  //desafio gotica
  if (status == 16) {
    fase16();
  }
  
  //belas artes
  if (status == 17) {
    fase17();
  }
  
  //dica  belas arte
  if (status == 18) {
    fase18();
  }
  
  //desafio belas artes
  if (status == 19) {
    fase19();
  }
  
  //contemporâneo
  if (status == 20) {
    fase20();
  }
  
  //dica contemporâneo
    if (status == 21) {
    fase21();
  }
  
  ////desafio contemporâneo
  if (status == 22) {
    fase22();
  }
  
  //novas artes
  if (status == 23) {
    fase23();
  }
  
  //dica novas artes
  if (status == 24) {
    fase24();
  }
  
  //desafio novas artes
  if (status == 25) {
    fase25();
  }
  
  //moderno
  if (status == 26) {
    fase26();
  }
  
  //dica moderno
  if (status == 27) {
    fase27();
  }
  
  //desafio moderno
  if (status == 28) {
    fase28();
  }
  
  //deco
  if (status == 29) {
    fase29();
  }
  
  //dica deco
  if (status == 30) {
    fase30();
  }
  
  //desafio deco
  if (status == 31) {
    fase31();
  }
  
  //pos moderno
    if (status == 32) {
    fase32();
  }
  
  //dica pos moderno
  if (status == 33) {
    fase33();
  }
  
  //desafio pos moderno
  if (status == 34) {
    fase34();
  }
  
  //brutalista
  if (status == 35) {
    fase35();
  }
  
  //dica brutalista
  if (status == 36) {
    fase36();
  }
  
  //desafio brutalista
  if (status == 37) {
    fase37();
  }
  
  //game over
  if (status == 38) {
    fase38();
  }
  
  // parabéns
  if (status == 39) {
    fase39();
  }

  print(status);

}

// codigo da tela inicial 
function fase0() { 
background(img);
  

  // botao para fase 1
  //fill(0)
  //rect(20, 20, 50, 50)
  if (cliqueX > 116 && cliqueX < 483 && cliqueY > 365 && cliqueY < 465) {
    status = 1;
  }
  
  // botao para fase 2
  //fill(250, 0, 0)
  //rect(100, 20, 50, 50)
  if (cliqueX > 116 && cliqueX < 483 && cliqueY > 230 && cliqueY < 340) {
    status = 2;
  }

}


//código da intruçõpes
function fase1() {
  background(img1);
  // botao para voltar à tela inicial
  botaoInicio();

  
}

//código da fase classica
function fase2() {
  background(classica);
  
  
  // botao A
 if (cliqueX >140 && cliqueX < 170 && cliqueY > 323 && cliqueY < 353) {
   status = 38
   }
  //BOTÃO B
  else if (cliqueX > 140 && cliqueX < 170 && cliqueY > 404 && cliqueY < 434) {
   status = 38
    }
  
  //BOTÃO c
  if (cliqueX > 420 && cliqueX < 450 && cliqueY > 323 && cliqueY < 353 ) {
  //awaitsleep(2000);
    status = 5
    }
  //botão d
  if (cliqueX > 420 && cliqueX < 450 && cliqueY > 404 && cliqueY < 434) {
   status = 38
  }
    
  //botão indice
    if (cliqueX > 542 && cliqueX < 572 && cliqueY > 15 && cliqueY < 45) {
   status = 3
    }
     

}


//desafio para conseguir a dica dica classica

function fase3(){
  fill(0);
  textSize(20);
  textAlign(CENTER);
  text('Boa Sorte!',300,440);
  text('Leve a esfera até o portal certo para conseguir sua dica!',300,400);
  labirinto();
  vitoriaJerry();

  labirinto();
  vitoriaJerry();

  for (var yDosQueijos=55; yDosQueijos<360; yDosQueijos=yDosQueijos+55){
    queijo(520,yDosQueijos,24,24)
  }
  jerry(posXJerryJogoJerry,posYJerryJogoJerry,tamXJerryJogoJerry,tamYJerryJogoJerry);
  moverJerry();
  
  if(cliqueX>520 && cliqueX<544 && cliqueY>55 && cliqueY<79){
    status = 2;
  } 
  if (cliqueX>520 && cliqueX<544 && cliqueY>110 && cliqueY<134){
    status = 2;
  } 
  if (cliqueX>520 && cliqueX<544 && cliqueY>165 && cliqueY<189){
    status = 2;
  } 
  if (cliqueX>520 && cliqueX<544 && cliqueY>220 && cliqueY<244){
    status = 2;
  } 
  if (cliqueX>520 && cliqueX<544 && cliqueY>275 && cliqueY<299){
    status = 4; //certo
  } 
  if (cliqueX>520 && cliqueX<544 && cliqueY>330 && cliqueY<354){
    status = 2;
  }   

}

//function fase3() {
  //background(200);
  //fill(0);
  //triangle(50, 360, 50, 390, 20, 375);
  //fill(0);
  //ellipse(mouseX, mouseY, 30)
  //if (cliqueX > 18 && cliqueX < 50 && cliqueY > 460 && cliqueY < 480) {
   // status = 4

  //}
//}


//dica classia
function fase4() {
  background(dicaclassica);
  //fill(0);
  //ellipse(mouseX, mouseY, 30)
  fill(0)
  rect(18, 20, 32,20)
  if  (cliqueX > 18 && cliqueX < 50 && cliqueY > 20 && cliqueY < 40) {
    status = 2
  }

}
//romanica perguntas
function fase5() {
  background(romanica);
  // botao A
 if (cliqueX > 15 && cliqueX < 45 && cliqueY > 160 && cliqueY < 190) {
   status = 38
   }
  //BOTÃO B
  if (cliqueX > 15 && cliqueX < 45 && cliqueY > 231 && cliqueY < 261) {
   status = 38
    }
  
  //BOTÃO c
  if (cliqueX > 15 && cliqueX < 45 && cliqueY > 310 && cliqueY < 340) {
  status = 38
   }
  //botão d
  if (cliqueX > 15 && cliqueX < 45 && cliqueY > 380 && cliqueY < 410) {
   status = 8
  }
  //botão indice
    if (cliqueX > 170 && cliqueX < 200 && cliqueY > 455 && cliqueY < 485) {
   status = 6
    }
  
}
  //romanica desafio
function fase6(){
  fill(0);
  textSize(20);
  textAlign(CENTER);
  text('Boa Sorte!',300,440);
  text('Leve a esfera até o portal certo para conseguir sua dica!',300,400);
  labirinto();
  vitoriaJerry();

  for (var yDosQueijos=55; yDosQueijos<360; yDosQueijos=yDosQueijos+55){
    queijo(520,yDosQueijos,24,24)
  }
  jerry(posXJerryJogoJerry,posYJerryJogoJerry,tamXJerryJogoJerry,tamYJerryJogoJerry);
  moverJerry();
  
  if(cliqueX>520 && cliqueX<544 && cliqueY>55 && cliqueY<79){
    status = 5;
  } 
  if (cliqueX>520 && cliqueX<544 && cliqueY>110 && cliqueY<134){
    status = 7;
  } 
  if (cliqueX>520 && cliqueX<544 && cliqueY>165 && cliqueY<189){
    status = 5;
  } 
  if (cliqueX>520 && cliqueX<544 && cliqueY>220 && cliqueY<244){
    status = 5;
  } 
  if (cliqueX>520 && cliqueX<544 && cliqueY>275 && cliqueY<299){
    status = 5; //certo
  } 
  if (cliqueX>520 && cliqueX<544 && cliqueY>330 && cliqueY<354){
    status = 5;
    
  }   

}
  //romanica dica
 function fase7(){
   background(romanicaD);
     fill(0)
  rect(18, 20, 32,20)
   if  (cliqueX > 18 && cliqueX < 50 && cliqueY > 20 && cliqueY < 40) {
    status = 5} 
}

function fase8() {
  background(moderno);
  // botao A
 if (cliqueX > 150 && cliqueY < 169 && cliqueY > 70 && cliqueY < 100) {
   status = 38
   }
  //BOTÃO B
  else if (cliqueX > 130 && cliqueX < 160 && cliqueY > 170 && cliqueY < 200) {
   status = 38
    }
  
  //BOTÃO c
  if (cliqueX > 430 && cliqueX < 460 && cliqueY > 70 && cliqueY < 100 ) {
  //awaitsleep(2000);
    status = 38
    }
  //botão d
  if (cliqueX > 430 && cliqueX < 460 && cliqueY > 170 && cliqueY < 200) {
   status = 11
  }
    
  //botão indice
    if (cliqueX > 23 && cliqueX < 58 && cliqueY > 15 && cliqueY < 50) {
   status = 9
    }
}

//desafio moderno
function fase9(){
  fill(0);
  textSize(20);
  textAlign(CENTER);
  text('Boa Sorte!',300,440);
  text('Leve a esfera até o portal certo para conseguir sua dica!',300,400);
  labirinto();
  vitoriaJerry();

  labirinto();
  vitoriaJerry();

  for (var yDosQueijos=55; yDosQueijos<360; yDosQueijos=yDosQueijos+55){
    queijo(520,yDosQueijos,24,24)
  }
  jerry(posXJerryJogoJerry,posYJerryJogoJerry,tamXJerryJogoJerry,tamYJerryJogoJerry);
  moverJerry();
  
  if(cliqueX>520 && cliqueX<544 && cliqueY>55 && cliqueY<79){
    status = 8;
  } 
  if (cliqueX>520 && cliqueX<544 && cliqueY>110 && cliqueY<134){
    status = 8;
  } 
  if (cliqueX>520 && cliqueX<544 && cliqueY>165 && cliqueY<189){
    status = 8;
  } 
  if (cliqueX>520 && cliqueX<544 && cliqueY>220 && cliqueY<244){
    status = 8;
  } 
  if (cliqueX>520 && cliqueX<544 && cliqueY>275 && cliqueY<299){
    status = 8; //certo
  } 
  if (cliqueX>520 && cliqueX<544 && cliqueY>330 && cliqueY<354){
    status = 10;
  }   

} 
  //moderno dica
 function fase10(){
   background(dicamoder);
     fill(0)
  rect(18, 20, 32,20)
   if  (cliqueX > 18 && cliqueX < 50 && cliqueY > 20 && cliqueY < 40) {
    status = 8 } 

}

//fase gotico
function fase11() {
  background(gotico);
  // botao A
 if (cliqueX > 20 && cliqueX < 50 && cliqueY > 360 && cliqueY < 390) {
   status = 14
   }
  //BOTÃO B
  else if (cliqueX > 20 && cliqueX < 50 && cliqueY > 450 && cliqueY < 480) {
   status = 38
    }
  
  //BOTÃO c
  if (cliqueX > 280 && cliqueX < 310 && cliqueY > 360 && cliqueY < 390 ) {
  //awaitsleep(2000);
    status = 38
    }
  //botão d
  if (cliqueX > 290 && cliqueX < 320 && cliqueY > 440 && cliqueY < 470) {
   status = 38
  }
    
  //botão indice
    if (cliqueX > 43 && cliqueX < 78 && cliqueY > 193 && cliqueY < 228) {
   status = 12
    }
}


//desafio gotico
function fase12(){
  fill(0);
  textSize(20);
  textAlign(CENTER);
  text('Boa Sorte!',300,440);
  text('Leve a esfera até o portal certo para conseguir sua dica!',300,400);
  labirinto();
  vitoriaJerry();

  labirinto();
  vitoriaJerry();

  for (var yDosQueijos=55; yDosQueijos<360; yDosQueijos=yDosQueijos+55){
    queijo(520,yDosQueijos,24,24)
  }
  jerry(posXJerryJogoJerry,posYJerryJogoJerry,tamXJerryJogoJerry,tamYJerryJogoJerry);
  moverJerry();
  
  if(cliqueX>520 && cliqueX<544 && cliqueY>55 && cliqueY<79){
    status = 13;
  } 
  if (cliqueX>520 && cliqueX<544 && cliqueY>110 && cliqueY<134){
    status = 11;
  } 
  if (cliqueX>520 && cliqueX<544 && cliqueY>165 && cliqueY<189){
    status = 11;
  } 
  if (cliqueX>520 && cliqueX<544 && cliqueY>220 && cliqueY<244){
    status = 11;
  } 
  if (cliqueX>520 && cliqueX<544 && cliqueY>275 && cliqueY<299){
    status = 11; //certo
  } 
  if (cliqueX>520 && cliqueX<544 && cliqueY>330 && cliqueY<354){
    status = 11;
  }   

}
  //gotico dica
 function fase13(){
   background(goticoD);
     fill(0)
  rect(18, 20, 32,20)
   if  (cliqueX > 18 && cliqueX < 50 && cliqueY > 20 && cliqueY < 40) {
    status = 11} 

}

//fase contemporanea
function fase14() {
  background(contemp);
  // botao A
 if (cliqueX > 265 && cliqueX < 295 && cliqueY > 150 && cliqueY < 180) {
   status = 38
   }
  //BOTÃO B
  else if (cliqueX > 265 && cliqueX < 295 && cliqueY > 225 && cliqueY < 255) {
   status = 38
    }
  
  //BOTÃO c
  if (cliqueX > 265 && cliqueX < 295 && cliqueY > 300 && cliqueY < 330 ) {
  //awaitsleep(2000);
    status = 17
    }
  //botão d
  if (cliqueX > 265 && cliqueX < 295 && cliqueY > 370 && cliqueY < 400) {
   status = 38
  }
    
  //botão indice
    if (cliqueX > 433 && cliqueX < 469 && cliqueY > 445 && cliqueY < 480) {
   status = 15 }
    
}

//desafio contemp
function fase15(){
  fill(0);
  textSize(20);
  textAlign(CENTER);
  text('Boa Sorte!',300,440);
  text('Leve a esfera até o portal certo para conseguir sua dica!',300,400);
  labirinto();
  vitoriaJerry();

  labirinto();
  vitoriaJerry();

  for (var yDosQueijos=55; yDosQueijos<360; yDosQueijos=yDosQueijos+55){
    queijo(520,yDosQueijos,24,24)
  }
  jerry(posXJerryJogoJerry,posYJerryJogoJerry,tamXJerryJogoJerry,tamYJerryJogoJerry);
  moverJerry();
  
  if(cliqueX>520 && cliqueX<544 && cliqueY>55 && cliqueY<79){
    status = 14;
  } 
  if (cliqueX>520 && cliqueX<544 && cliqueY>110 && cliqueY<134){
    status = 14;
  } 
  if (cliqueX>520 && cliqueX<544 && cliqueY>165 && cliqueY<189){
    status = 14;
  } 
  if (cliqueX>520 && cliqueX<544 && cliqueY>220 && cliqueY<244){
    status = 16;
  } 
  if (cliqueX>520 && cliqueX<544 && cliqueY>275 && cliqueY<299){
    status = 14; //certo
  } 
  if (cliqueX>520 && cliqueX<544 && cliqueY>330 && cliqueY<354){
    status = 14;
  }   

}
  //contemp dica
 function fase16(){
   background(dicacontemp);
     fill(0)
  rect(18, 20, 32,20)
   if  (cliqueX > 18 && cliqueX < 50 && cliqueY > 20 && cliqueY < 40) {
    status = 14} 

}

//fase brutalismo
function fase17() {
  background(bruta);
  // botao A
 if (cliqueX > 15 && cliqueX < 45 && cliqueY > 118 && cliqueY < 148) {
   status = 38
   }
  //BOTÃO B
  else if (cliqueX > 12 && cliqueX < 45 && cliqueY > 180 && cliqueY < 210) {
   status = 20
    }
  
  //BOTÃO c
  if (cliqueX > 310 && cliqueX < 340 && cliqueY > 113 && cliqueY < 143 ) {
  //awaitsleep(2000);
    status = 38
    }
  //botão d
  if (cliqueX > 310 && cliqueX < 340 && cliqueY > 180 && cliqueY < 210) {
   status = 38
  }
    
  //botão indice
    if (cliqueX > 523 && cliqueX < 558 && cliqueY > 360 && cliqueY < 395) {
   status = 18
    }
}


//desafio bruta
function fase18(){
  fill(0);
  textSize(20);
  textAlign(CENTER);
  text('Boa Sorte!',300,440);
  text('Leve a esfera até o portal certo para conseguir sua dica!',300,400);
  labirinto();
  vitoriaJerry();

  labirinto();
  vitoriaJerry();

  for (var yDosQueijos=55; yDosQueijos<360; yDosQueijos=yDosQueijos+55){
    queijo(520,yDosQueijos,24,24)
  }
  jerry(posXJerryJogoJerry,posYJerryJogoJerry,tamXJerryJogoJerry,tamYJerryJogoJerry);
  moverJerry();
  
  if(cliqueX>520 && cliqueX<544 && cliqueY>55 && cliqueY<79){
    status = 17;
  } 
  if (cliqueX>520 && cliqueX<544 && cliqueY>110 && cliqueY<134){
    status = 17;
  } 
  if (cliqueX>520 && cliqueX<544 && cliqueY>165 && cliqueY<189){
    status = 19;
  } 
  if (cliqueX>520 && cliqueX<544 && cliqueY>220 && cliqueY<244){
    status = 17;
  } 
  if (cliqueX>520 && cliqueX<544 && cliqueY>275 && cliqueY<299){
    status = 17; //certo
  } 
  if (cliqueX>520 && cliqueX<544 && cliqueY>330 && cliqueY<354){
    status = 17;
  }   

}
    
  //bruta dica
 function fase19(){
   background(brutoD);
     fill(0)
  rect(18, 20, 32,20)
   if  (cliqueX > 18 && cliqueX < 50 && cliqueY > 20 && cliqueY < 40) {
    status = 17}

}


//código gameover
function fase38() {
  background(gameover);
  // botao para voltar à tela inicial
  botaoInicio();
}

function fase20(){
  background(vitoria);
  botaoInicio();
}

function botaoInicio() {
  fill(0);
  triangle(50, 490, 50, 460, 20, 475);
  if (cliqueX > 18 && cliqueX < 50 && cliqueY > 460 && cliqueY < 480) {
    status = 0;
  }
}



function mouseClicked() {
  
  cliqueX = mouseX;
  cliqueY = mouseY;
 // cliquex = mouseX;
  //cliquey = mouseY;
  cliqueX1= mouseX;
  cliqueY1 = mouseY;

}

//FUNÇÕES JOGO JERRY
function labirinto(){
  noStroke();
  fill(0);
  
  //em volta
  rect(40,40,520,5);
  rect(40,360,520,5);
  rect(40,40,5,320);
  rect(555,40,5,320);
  if(posXJerryJogoJerry<45 || posXJerryJogoJerry+tamXJerryJogoJerry>560 || posYJerryJogoJerry<45 || posYJerryJogoJerry+tamYJerryJogoJerry>360){
  }
  
  if(posXJerryJogoJerry<45 || posXJerryJogoJerry+tamXJerryJogoJerry>560 || posYJerryJogoJerry<45 || posYJerryJogoJerry+tamYJerryJogoJerry>360){
    morteJerry();
  }
  
  //linhas
  rect(40,90,200,5);//linha1
  if(posXJerryJogoJerry>40 && posXJerryJogoJerry<240 && posYJerryJogoJerry+tamYJerryJogoJerry>90 && posYJerryJogoJerry<95){
    morteJerry();
  }
  rect(330,90,230,5);//linha1
  if(posXJerryJogoJerry>330 && posXJerryJogoJerry<560 && posYJerryJogoJerry+tamYJerryJogoJerry>90 && posYJerryJogoJerry<95){
    morteJerry();
  }
  
  rect(85,145,300,5);//linha2
  if(posXJerryJogoJerry>85 && posXJerryJogoJerry<385 && posYJerryJogoJerry+tamYJerryJogoJerry>145 && posYJerryJogoJerry<150){
    morteJerry();
  }
  rect(470,145,90,5);//linha2
  if(posXJerryJogoJerry>470 && posXJerryJogoJerry<560 && posYJerryJogoJerry+tamYJerryJogoJerry>145 && posYJerryJogoJerry<150){
    morteJerry();
  }
  
  rect(40,200,60,5);//linha3
  if(posXJerryJogoJerry>40 && posXJerryJogoJerry<100 && posYJerryJogoJerry+tamYJerryJogoJerry>200 && posYJerryJogoJerry<205){
    morteJerry();
  }
  rect(190,200,370,5);//linha3
  if(posXJerryJogoJerry>190 && posXJerryJogoJerry<560 && posYJerryJogoJerry+tamYJerryJogoJerry>200 && posYJerryJogoJerry<205){
    morteJerry();
  }
  
  rect(40,255,200,5);//linha4
  if(posXJerryJogoJerry>40 && posXJerryJogoJerry<240 && posYJerryJogoJerry+tamYJerryJogoJerry>255 && posYJerryJogoJerry<260){
    morteJerry();
  }
  rect(330,255,230,5);//linha4
  if(posXJerryJogoJerry>330 && posXJerryJogoJerry<560 && posYJerryJogoJerry+tamYJerryJogoJerry>255 && posYJerryJogoJerry<260){
    morteJerry();
  }
  
  rect(85,310,290,5);//linha5
  if(posXJerryJogoJerry>85 && posXJerryJogoJerry<375 && posYJerryJogoJerry+tamYJerryJogoJerry>310 && posYJerryJogoJerry<315){
    morteJerry();
  }
  rect(480,310,80,5);//linha5
  if(posXJerryJogoJerry>480 && posXJerryJogoJerry<560 && posYJerryJogoJerry+tamYJerryJogoJerry>310 && posYJerryJogoJerry<315){
    morteJerry();
  }
  
  //colunas 
  rect(280,40,5,105);//coluna2
  if(posXJerryJogoJerry+tamXJerryJogoJerry>280 && posXJerryJogoJerry<285 && posYJerryJogoJerry>40 && posYJerryJogoJerry<145){
    morteJerry();
  }
  
  rect(425,95,5,55);//coluna3
  if(posXJerryJogoJerry+tamXJerryJogoJerry>425 && posXJerryJogoJerry<430 && posYJerryJogoJerry>95 && posYJerryJogoJerry<150){
    morteJerry();
  }
  
  rect(140,150,5,55);//coluna1
  if(posXJerryJogoJerry+tamXJerryJogoJerry>140 && posXJerryJogoJerry<145 && posYJerryJogoJerry>150 && posYJerryJogoJerry<205){
    morteJerry();
  }
  
  rect(280,205,5,105);//coluna2
  if(posXJerryJogoJerry+tamXJerryJogoJerry>280 && posXJerryJogoJerry<285 && posYJerryJogoJerry>205 && posYJerryJogoJerry<310){
    morteJerry();
  }
  
  rect(425,310,5,55);//coluna3
  if(posXJerryJogoJerry+tamXJerryJogoJerry>425 && posXJerryJogoJerry<430 && posYJerryJogoJerry>310 && posYJerryJogoJerry<365){
    morteJerry();
  }
  
}
function vitoriaJerry(){
  if(cliqueX>520 && cliqueX<544 && cliqueY>55 && cliqueY<79){
    tela = 5;
  } 
  if (cliqueX>520 && cliqueX<544 && cliqueY>110 && cliqueY<134){
    tela = 5;
  } 
  if (cliqueX>520 && cliqueX<544 && cliqueY>165 && cliqueY<189){
    tela = 5;
  } 
  if (cliqueX>520 && cliqueX<544 && cliqueY>220 && cliqueY<244){
    tela = 5;
  } 
  if (cliqueX>520 && cliqueX<544 && cliqueY>275 && cliqueY<299){
    tela = 4; //certo
  } 
  if (cliqueX>520 && cliqueX<544 && cliqueY>330 && cliqueY<354){
    tela = 5;
  }
}


function queijo(xQueijo, yQueijo, tamXQueijo, tamYQueijo){
  stroke(0);
  fill(255, 230, 30);
  //triangle(xQueijo,yQueijo+(tamYQueijo/5),xQueijo+tamXQueijo,yQueijo,xQueijo+(tamXQueijo/2),yQueijo+(tamYQueijo/5*3));
  quad(xQueijo,yQueijo+(tamYQueijo/5),xQueijo,yQueijo+(tamYQueijo/5*3),xQueijo+(tamXQueijo/2),yQueijo+tamYQueijo,xQueijo+(tamXQueijo/2),yQueijo+(tamYQueijo/5*3));
 // quad(xQueijo+(tamXQueijo/2),yQueijo+tamYQueijo,xQueijo+(tamXQueijo/2),yQueijo+(tamYQueijo/5*3),xQueijo+tamXQueijo,yQueijo,xQueijo+tamXQueijo,yQueijo+(tamYQueijo/5*2));
}


function jerry(xJerry, yJerry, tamXJerry, tamYJerry){
  stroke(0);
  fill(208, 146, 32);
 // rect(xJerry+(tamXJerry/110*10),yJerry+(tamYJerry/200*180),tamXJerry/110*40,tamYJerry/200*20,15,15,15,15);//pé esquerdo
 // rect(xJerry+(tamXJerry/110*60),yJerry+(tamYJerry/200*180),tamXJerry/110*40,tamYJerry/200*20,15,15,15,15);//pé direito
 // rect(xJerry+(tamXJerry/110*30),yJerry+(tamYJerry/200*145),tamXJerry/110*17,tamYJerry/200*40,2,2,5,5);//perna esquerda
 // rect(xJerry+(tamXJerry/110*63),yJerry+(tamYJerry/200*145),tamXJerry/110*17,tamYJerry/200*40,2,2,5,5);//perna direita
 // triangle(xJerry+(tamXJerry/110*30),yJerry+(tamYJerry/200*130),xJerry+(tamXJerry/110*30),yJerry+(tamYJerry/200*140),xJerry-(tamXJerry/110*10),yJerry+(tamYJerry/200*105));//rabo
 // rect(xJerry+(tamXJerry/110*20),yJerry+(tamYJerry/200*80),tamXJerry/110*20,tamYJerry/200*50,5,5,5,5);//braço esquerdo
 // rect(xJerry+(tamXJerry/110*70),yJerry+(tamYJerry/200*80),tamXJerry/110*20,tamYJerry/200*50,5,5,5,5);//braço direito
 // ellipse(xJerry+(tamXJerry/110*25),yJerry+(tamYJerry/200*130),tamXJerry/110*17,tamYJerry/200*23);//mão esquerda
  //ellipse(xJerry+(tamXJerry/110*85),yJerry+(tamYJerry/200*130),tamXJerry/110*17,tamYJerry/200*23);//mão direita
  rect(xJerry+(tamXJerry/110*30),yJerry+(tamYJerry/200*70),tamXJerry/110*50,tamYJerry/200*90,30,30,30,30);//corpo maior
 // ellipse(xJerry+(tamXJerry/110*35),yJerry+(tamYJerry/200*13),tamXJerry/110*25,tamYJerry/200*25);//orelha esquerda
 // ellipse(xJerry+(tamXJerry/110*75),yJerry+(tamYJerry/200*13),tamXJerry/110*25,tamYJerry/200*25);//orelha direita
 // ellipse(xJerry+(tamXJerry/110*55),yJerry+(tamYJerry/200*45),tamXJerry/110*45,tamYJerry/200*60);//cabeça
  //fill(250, 185, 163);
 // ellipse(xJerry+(tamXJerry/110*32),yJerry+(tamYJerry/200*17),tamXJerry/110*18,tamYJerry/200*18);//orelha esquerda
  //ellipse(xJerry+(tamXJerry/110*77),yJerry+(tamYJerry/200*17),tamXJerry/110*18,tamYJerry/200*18);//orelha direita
  //fill(255, 206, 153);
 // rect(xJerry+(tamXJerry/110*40),yJerry+(tamYJerry/200*80),tamXJerry/110*30,tamYJerry/200*70,30,30,30,30);//barriga
 // fill(255);
 // ellipse(xJerry+(tamXJerry/110*46),yJerry+(tamYJerry/200*35),tamXJerry/110*12,tamYJerry/200*22);//olho esquerdo
  //ellipse(xJerry+(tamXJerry/110*64),yJerry+(tamYJerry/200*35),tamXJerry/110*12,tamYJerry/200*22);//olho direito
 // fill(0);
 // ellipse(xJerry+(tamXJerry/110*46),yJerry+(tamYJerry/200*42),tamXJerry/110*5,tamYJerry/200*6);//olho esquerdo
 // ellipse(xJerry+(tamXJerry/110*64),yJerry+(tamYJerry/200*42),tamXJerry/110*5,tamYJerry/200*6);//olho direito
//triangle(xJerry+(tamXJerry/110*50),yJerry+(tamYJerry/200*55),xJerry+(tamXJerry/110*60),yJerry+(tamYJerry/200*55),xJerry+(tamXJerry/110*55),yJerry+(tamYJerry/200*60));//fucinho
}

function moverJerry(){  
 if (mouseX-tamXJerryJogoJerry > posXJerryJogoJerry) {
   posXJerryJogoJerry = posXJerryJogoJerry + velJerryJogoJerry;
 }  
  
  if (mouseX-tamXJerryJogoJerry < posXJerryJogoJerry) {
   posXJerryJogoJerry = posXJerryJogoJerry - velJerryJogoJerry;
 } 
  
  if (mouseY-tamYJerryJogoJerry < posYJerryJogoJerry) {
   posYJerryJogoJerry = posYJerryJogoJerry - velJerryJogoJerry;
 }
  
  if (mouseY-tamYJerryJogoJerry > posYJerryJogoJerry) {
   posYJerryJogoJerry = posYJerryJogoJerry + velJerryJogoJerry;
 }
}

function morteJerry(){
  posXJerryJogoJerry=50;
  posYJerryJogoJerry=55;
}

function bordas(){
  noStroke();
  fill(0);
  rect(35,35,530,5);
  rect(35,360,530,5);
  rect(35,35,5,330);
  rect(560,35,5,330);
}