var y = [];
var y2=[];
var x = [];
var x2=[];
var incrementos = [];
var h =[];
var numPelotas=15;
var numLuces=35;
var colorR=[];
var colorG=[];
var colorB=[];

function setup() {
  createCanvas(600, 400);
  for(var i =0; i <numPelotas;i=i+1){
    y[i]=0;
    x[i]= floor(random(1,width));
    incrementos[i]=floor(random(5,15));
    h[i]=floor(random(1,20));
  }
  for(var j=0; j<numLuces;j=j+1){
    y2[j]=floor(random(height/3+10,height/6*5));
    x2[j]=floor(random(width/6,width/3));
    colorR[j]=ceil(random(255));
    colorG[j]=ceil(random(255));
    colorB[j]=ceil(random(255));
  }

    
}

function draw() {
  
background(color(59, 131, 200));
  fill(255);
  rect(0, height-30, width, 30);
  circle(width/4*3, height/3*2, 65);
  circle(width/4*3, height/6*5, 100);
  fill('green');
  triangle(width/4, height/3, width/4+50, height/3+50, width/4-50, height/3+50);
    triangle(width/4, height/3+10, width/4+60, height/3+90, width/4-60, height/3+90);
    triangle(width/4, height/3+20, width/4+70, height/3+130, width/4-70, height/3+130);
    triangle(width/4, height/3+30, width/4+80, height/3+160, width/4-80, height/3+160);
 triangle(width/4, height/3+50, width/4+90, height/3+190, width/4-90, height/3+190);
  fill(168,64,0);
  rect(width/5+20, height/5*4, 30, 60);
  
  ///// NIEVE
  stroke(255);
  fill(255);
  strokeWeight(4);
  
  for(var j=0; j<numPelotas; j=j+1){

    ellipse(x[j],y[j],h[j]);
    if (y[j]>height){
        y[j]=0;
        //incrementos[j]=incrementos[j]*-1;
    }else if (y[j]<0){
        incrementos[j]=incrementos[j]*-1;
      }
    y[j]=y[j]+incrementos[j];
  }
  ///PRESIONAR LAS TECLAS Y MENSAJES
  
    if (keyIsPressed) {
      strokeWeight(1);
      stroke(255);
      textSize(50);
      fill('red');
    if ((key == 'a') || (key == 'A')) {
     text("¡Feliz año nuevo!", (width/3), height/4);
     
    }
    else if ((key == 'n') || (key == 'N')) {
     text("¡Feliz navidad!", (width/3), height/4)
    }
    else{ 
      text("¡Felices fiestas!", (width/3), height/4)
    }
  }
  
  for(var k=0; k<numLuces; k=k+1){
    stroke (255);
    strokeWeight(0);
    fill(colorR[k],colorG[k], colorB[k]);
    colorR[k]= (colorR[k]+4)%255;
    colorG[k]= (colorG[k]+4)%255;
    colorB[k]= (colorB[k]+4)%255;
    ellipse(x2[k],y2[k], 10, 12);

  }

}