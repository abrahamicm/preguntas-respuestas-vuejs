var a = ["uno","dos","tres"]
var i = [0];

function siguiente(arreglo,indice){
	
	indice[0]=indice[0]+1;

	if(indice[0] >= arreglo.length){
		indice[0]=0
	}
	//console.log(arreglo[ indice[0] ]);

}


