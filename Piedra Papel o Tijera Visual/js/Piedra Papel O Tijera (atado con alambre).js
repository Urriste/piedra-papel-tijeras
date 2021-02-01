let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let btnJugar = document.getElementById('btn-jugar');
let ganadores = document.getElementById('ganador');
let player1 = document.getElementById('eleccion1');
let player2 = document.getElementById('eleccion2');
let reset = document.getElementById('reset')
let resultado = "";
let jugador1 = {nombre:"", eleccion:""};
let jugador2 = {nombre:"", eleccion:""};




function eleccion (){
	let n = (Math.floor(Math.random ()*3)+1);

	if (n == 1){
		return "piedra";
	}

	if (n == 2){
		return "papel";
	}

	if (n == 3){
		return "tijera";
	}
}



function ganador () {
//Casos si Jugador 1 tiene piedra//
	if ((jugador1.eleccion == "piedra") && (jugador2.eleccion == "papel")){
		resultado = jugador2.nombre;
	}

	if ((jugador1.eleccion == "piedra") &&(jugador2.eleccion2 == "tijera")){
		resultado = jugador1.nombre;
	}

//Casos si el jugador 2 tiene piedra//

	if ((jugador2.eleccion == "piedra") && (jugador1.eleccion == "papel")){
		resultado = jugador1.nombre;
	}

	if ((jugador2.eleccion == "piedra") &&(jugador1.eleccion == "tijera")){
		resultado = jugador2.nombre;
	}

//Casos si Jugador 1 tiene papel//
	if ((jugador1.eleccion == "papel") && (jugador2.eleccion2 == "piedra")){
		resultado = jugador1.nombre;
	}

	if((jugador1.eleccion == "papel") && (jugador2.eleccion == "tijera")){
		resultado = jugador2.nombre;
	}

//Casos si el jugador 2 tiene papel//
	if ((jugador2.eleccion == "papel") && (jugador1.eleccion == "piedra")){
		resultado = jugador2.nombre;
	}

	if((jugador2.eleccion == "papel") && (jugador1.eleccion == "tijera")){
		resultado = jugador1.nombre;
	}



//Casos si Jugador 1 tiene tijeras//
	if ((jugador1.eleccion == "tijera") && (jugador2.eleccion == "papel")){
		resultado = jugador1.nombre;
	}

	if ((jugador1.eleccion == "tijera") && (jugador2.eleccion == "piedra")){
		resultado = jugador2.nombre;
	}



//Casos si Jugador 2 tiene tijeras//
if ((jugador2.eleccion == "tijera") && (jugador1.eleccion == "papel")){
	resultado = jugador2.nombre;
}

if ((jugador2.eleccion == "tijera") && (jugador1.eleccion == "piedra")){
	resultado = jugador1.nombre;
}



}

btnJugar.addEventListener('click', ()=>{

	jugador1.nombre = input1.value;
	jugador2.nombre = input2.value;



	jugador1.eleccion = eleccion();
	jugador2.eleccion = eleccion();

	ganador();
	
	
	ganadores.classList.replace('none', 'active');
	if (jugador1.eleccion != jugador2.eleccion){
		ganadores.innerHTML = `El/la ganador/a es ${resultado}`;
	}else{
		ganadores.innerHTML = "Es un empate!"
	}
	
	reset.style.display = 'block';
	
});
