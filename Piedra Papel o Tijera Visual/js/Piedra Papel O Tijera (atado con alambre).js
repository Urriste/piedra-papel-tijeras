let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let btnJugar = document.getElementById('btn-jugar');
let ganadores = document.getElementById('ganador')
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let player1 = document.getElementById('eleccion1');
let player2 = document.getElementById('eleccion2');

let jugador1 = "";
let jugador2 ="";



let eleccion1 = "";
let eleccion2 = "";



let numero = (Math.floor(Math.random ()*3)+1);
let numero2 = (Math.floor(Math.random ()*3)+1);



switch (numero){
	case 1:
		eleccion1 = "piedra";
	break;
	case 2: 
		eleccion1 = "papel";
	break;
	case 3:
		eleccion1 ="tijera";
	break;
	default:
		alert("flashaste");
	break
}


switch (numero2){
	case 1:
		eleccion2 = "piedra";
	break;
	case 2: 
		eleccion2 = "papel";
	break;
	case 3:
		eleccion2 ="tijera";
	break;
	default:
		alerta("flashaste");
	break
}



btn1.addEventListener('click', ()=>{
	jugador1 = input1.value;
	player1.innerHTML = `El/la jugador/a 1 es: ${jugador1}`;
} )

btn2.addEventListener('click', ()=>{
	jugador2 = input2.value;
	player2.innerHTML =  `El/la jugador/a 2 es: ${jugador2}`;
} )

function ganador (eleccion1, eleccion2) {
	//Casos si Jugador 1 tiene piedra//
	if ((eleccion1 == "piedra") && (eleccion2 == "papel")){
		ganadores.innerHTML = `El ganador es: ${jugador2} teniendo ${eleccion2}`;
	}

	if ((eleccion1 == "piedra") &&(eleccion2 == "tijera")){
		ganadores.innerHTML = `El ganador es: ${jugador1} teniendo ${eleccion1}`;
	}

//Casos si Jugador 1 tiene papel//
	if ((eleccion1 == "papel") && (eleccion2 == "piedra")){
		ganadores.innerHTML = `El ganador es: ${jugador1} teniendo ${eleccion1}`;
	}

	if((eleccion1 == "papel") && (eleccion2 == "tijera")){
		ganadores.innerHTML = `El ganador es: ${jugador2} teniendo ${eleccion2}`;
	}


//Casos si Jugador 1 tiene tijeras//
	if ((eleccion1 == "tijera") && (eleccion2 == "papel")){
		ganadores.innerHTML = `El ganador es: ${jugador1} teniendo ${eleccion1}`;
	}

	if ((eleccion1 == "tijera") && (eleccion2 == "piedra")){
		ganadores.innerHTML = `El ganador es: ${jugador2} teniendo ${eleccion2}`;
	}

	if (eleccion1 == eleccion2){
		ganadores.innerHTML = `Es un empate! Ambos tuvieron  ${eleccion1}`;
	}
}

btnJugar.addEventListener('click', ()=>{

	ganador(eleccion1,eleccion2)
});