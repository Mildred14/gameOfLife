//Variables
var columnas=20, filas=20;


//Functions
function crearMatriz(){
    let matriz = new Array(columnas);
     for(let i = 0; i<matriz.length; i++){
         matriz[i]= new Array(filas);
   }
   return matriz;
 }

 function llenarMatriz(){
     let espacioCelular = crearMatriz();
     for(let i = 0; i<columnas; i++){
         for(let j=0; j<filas; j++){
            
             espacioCelular[i][j]=floor(random(2));
         }
     }
     return espacioCelular;
 }
function setup(){
    createCanvas(300, 300);
    let tableroJuego=crearMatriz();
}

var llamarMatriz
function draw(){
    background('black');
    llamarMatriz=llenarMatriz();
    for(var i=0; i<columnas; i++){
        for(var j=0; j<filas; j++){
            var x=i*20;
            var y=j*20;
            if(validarNumero(i,j)){
            stroke(0);
            fill('orange');
            rect(x, y, 20, 20);
            }
        }
    }
}

function validarNumero(i,j){
    if(llamarMatriz[i][j]===1){
        return true;
    }else{
        return false;
    }

}


function restricciones(){
    if(celula==0 && vecinos ==3){
        espacioCelular[i][j]=1;
    } else if(celula==1 &&(vecinos<2 || vecinos >3)){
        espacioCelular[i][j]=0;
    }else{
        espacioCelular[i][j]=celula;
    }

}






