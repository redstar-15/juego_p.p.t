var jugador = "";
var maquina = "";
var victoria_maquina = 0;
var victoria_jugador = 0;
var victoria_juga = 0
var victoria_maqui= 0
var jugador_piedra = document.getElementById("boton_piedra")
jugador_piedra.addEventListener("click",eleccion_piedra)
var jugador_papel = document.getElementById("boton_papel")
jugador_papel.addEventListener("click",eleccion_papel)
var jugador_tijera = document.getElementById("boton_tijeras")
jugador_tijera.addEventListener("click",eleccion_tijeras)
//var modo_gana_3 = document.getElementById("ganar_de_3")
//modo_gana_3.addEventListener("click",juego)


function aleatorio (min,max){
    return Math.floor(Math.random()* (max-min+1)+min)
};
function eleccion_maquina(){
    eleccion_ma = aleatorio(1,3);
    if(eleccion_ma == 1){
        maquina = "piedra"
    } else if (eleccion_ma == 2){
        maquina = "papel"
    } else if (eleccion_ma == 3){
        maquina = "tijeras"
    }
    mensajes_juego()
    return maquina
}
function eleccion_piedra(){
    jugador = "piedra"
    eleccion_maquina()
}
function eleccion_papel(){
    jugador = "papel"
    eleccion_maquina()
}
function eleccion_tijeras(){
    jugador = "tijeras"
    eleccion_maquina()
}
function juego(){
    //var victoria_juga = 0;
    //var victoria_maqui = 0;
    victoria_jugador = document.getElementById("victoria_jugador")
    victoria_maquina = document.getElementById("victoria_maquina")
  
    if (jugador == maquina){
        resultado = "empate"
    }else if (jugador == "piedra" && maquina == "tijeras"){
        resultado = "ganaste"
        victoria_juga++
        victoria_jugador.innerHTML= victoria_juga
    }else if (jugador == "papel" && maquina == "piedra"){
        resultado = "ganaste"
        victoria_juga++
        victoria_jugador.innerHTML= victoria_juga
    }else if (jugador == "tijeras" && maquina == "papel"){
        resultado = "ganaste"
        victoria_juga++
        victoria_jugador.innerHTML= victoria_juga
    }else {
        resultado = "perdiste"
        victoria_maqui++
        victoria_maquina.innerHTML= victoria_maqui
    }
    resultado_juego();
    return resultado
}
function resultado_juego(){
    if (victoria_juga == 3){
        mensaje_final("ganaste")
    } else if (victoria_maqui == 3){
        mensaje_final("perdiste bobo")
    }
}
function mensaje_final(mensaje){
    var seccion_mensa = document.getElementById("gana")
    //var mensa = document.createElement("p")
    //mensa.innerHTML= mensaje
    seccion_mensa.innerHTML= mensaje
    jugador_piedra.disabled= true
    jugador_papel.disabled= true
    jugador_tijera.disabled= true
}

function mensajes_juego(){
    var seccion_mensaje = document.getElementById("mensajes")
    var mensaje = document.createElement("p")
    mensaje.innerHTML = "la maquina eligio "+ maquina + " tu elegiste "+ jugador +" "+ juego()
    seccion_mensaje.appendChild(mensaje)
}