
//var choixDeCalcul = prompt("Choisissez le type de calcul que vous voulez effectuer :\n Addition = add |\n Soustraction = sous |\n Multiplication = multip |\n Division = divis");
function MyAdditionFunction() {
	function additionne(nbr1, nbr2){
		var resultat = Number(nbr1) + Number(nbr2);
		return resultat;
	}
	var prompt1 = inputRequest(1);
	var prompt2 = inputRequest(2);

	var add = additionne(prompt1, prompt2);
	console.log(add);
	alert(add);
}

function MySoustractionFunction() {
	function soustraction(nbr1, nbr2){
		var resultat = Number(nbr1) - Number(nbr2);
		return resultat;
	}
	
	var prompt1 = inputRequest(1);
	var prompt2 = inputRequest(2);

	var sous = soustraction(prompt1, prompt2);
	console.log(sous);
	alert(sous);
}

function MyDivisionFunction() {
	function division(nbr1, nbr2){
		var resultat = Number(nbr1) / Number(nbr2);
		return resultat;
	}
	var prompt1 = inputRequest(1);
	var prompt2 = inputRequest(2);

	var divis = division(prompt1, prompt2);
	console.log(divis);
	alert(divis);
}

function MyMultiplicationFunction() {
	function multiplication(nbr1, nbr2){
		var resultat = Number(nbr1) * Number(nbr2);
		return resultat;
	}
	var prompt1 = inputRequest(1);
	var prompt2 = inputRequest(2);

	var multip = multiplication(prompt1, prompt2);
	console.log(multip);
	alert(multip);
}


function inputRequest(num) {
	var prompt1 = prompt('Votre nombre n°' + num);

	while (isNaN(prompt1)) {
		prompt1 = prompt('Ceci n\'est pas un nombre, reentrez votre nombre n°' + num);
	}

	return prompt1;
}