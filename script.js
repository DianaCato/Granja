var vp= document.getElementById ("villaplatzi");
var papel= vp.getContext("2d");


const vaca = {
  url:"vaca.webp",
  cargaOk: false
};

let pollo = {
  url: "pollo.webp",
  cargaOk:false
};

let cerdo= {
  url:"cerdo.webp",
  cargaOk:false
};

let lobo= {
  url:"lobo.png",
  cargaOk:false
};


vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarAnimales);

pollo.imagen= new Image();
pollo.imagen.src= pollo.url;
pollo.imagen.addEventListener ("load",cargarAnimales);

cerdo.imagen= new Image ();
cerdo.imagen.src= cerdo.url;
cerdo.imagen.addEventListener ("load",cargarAnimales);


function cargarAnimales (){
vaca.cargaOk = true;
pollo.cargaOk = true;
cerdo.cargaOk= true;
dibujar();

}

function aleatorio(min,maxi)
{  let resultado;
  resultado= Math.floor(Math.random() * (maxi - min + 1))+ min;
  return resultado;
}

var diVacas = aleatorio (0,8);
var diPollos= aleatorio (0,10);
var dicerdos= aleatorio (0,7);


function dibujar(){

  if (vaca.cargaOk){
for (let v= 0;v<diVacas;v++){
var x= aleatorio(0, 7);
x= x*60;
var y = aleatorio (0,7);
y= y*60;
papel.drawImage(vaca.imagen,x,y);
  }
  }
  if (pollo.cargaOk){
    for (let p=0; p<diPollos; p++){
      var xp= aleatorio (0,420);
      var yp= aleatorio (0,420);
      papel.drawImage (pollo.imagen,xp,yp);
    }
  }
 if (cerdo.cargaOk){
   for (let c=0; c<dicerdos;c++){
     var xc= aleatorio (0,420);
     var yc= aleatorio (0,420);
     papel.drawImage (cerdo.imagen,xc,yc);
   }
 }
}

lobo.imagen= new Image();
lobo.imagen.src= lobo.url;
lobo.imagen.addEventListener("click", cargarLobo);

 function cargarLobo (){
lobo.cargaOk = true;
if (lobo.cargaOk){
  papel.drawImage(lobo.imagen,xl,yl);
 }
 }

 function dibujarLobo (){
   papel.drawImage(lobo.imagen,xl,yl);
 }

//movimiento del lobo

let xl=0;
let yl=0;

var teclas = {
	UP:38,
	DOWN:40,
	LEFT:37,
	RIGHT:39
};

document.addEventListener ("keyup", moverLobo);

function moverLobo (evento){
  let mov= 10;
switch(evento.keyCode){
			case teclas.UP:
			papel.clearRect(xl,yl,70,70);
      dibujarLobo();
       yl= yl - mov;
			break;
			case teclas.DOWN:
      papel.clearRect(xl,yl,70,70);
				dibujarLobo ();
        yl= yl + mov;
			break;
			case teclas.LEFT:
     papel.clearRect(xl,yl,70,70);
				dibujarLobo();
        xl=xl - mov;
			break;
			case teclas.RIGHT:
      papel.clearRect(xl,yl,70,70);
				dibujarLobo();
        xl=xl + mov;
			break;
		}
}
//mover con mouse

function getMousePos (vp,evt){
  return{
    xMo: evt.clientX,
    yMo: evt.clientY
  }
}
 vp.addEventListener ("mousemove",moverLobito);

function moverLobito (evt){
  var mousePost = getMousePos (vp,evt);
  papel.clearRect (mousePost.xMo-50,mousePost.yMo-50, 70,70);
  papel.drawImage(lobo.imagen,mousePost.xMo-40,mousePost.yMo-40);
}

// jugar con teclas
var arriba = document.getElementById ("arriba");
arriba.addEventListener("click",moverArriba);

function moverArriba ()
{
papel.clearRect(xl,yl+20,70,70);
      dibujarLobo();
       yl= yl - 20;
}

var abajo = document.getElementById ("abajo")
  ;
  abajo.addEventListener("click",moverAbajo);

function moverAbajo ()
{
papel.clearRect(xl-20,yl-20,80,80);
				dibujarLobo ();
        yl= yl + 20;
}

 var derecha= document.getElementById ("derecha");
  derecha.addEventListener("click",moverDerecha);

function moverDerecha ()
{
 papel.clearRect(xl-20,yl-20,70,70);
				dibujarLobo();
        xl=xl + 20;
}

var izquierda =document.getElementById ("izquierda");
izquierda.addEventListener("click",moverIzquierda);

function moverIzquierda ()
{
papel.clearRect(xl,yl,90,90);
				dibujarLobo();
        xl=xl - 20;
}

  //conteo regresivo
window.onload = updateClock;

var totalTime = 100;

function updateClock() {
  document.getElementById('countdown').innerHTML = totalTime;
  if(totalTime==0){
    alert ('Se te acabo el tiempo lobito!');
  }else{
    totalTime-=1;
    setTimeout("updateClock()",1000);
  }
}
