var alumnas = [ { nombre : "Meche", apellido : "Zubieta",  promocion : "1era. promoción", estado : "Trabajando" },
			 { nombre : "Arabela", apellido : "Rojas", promocion : "2da. promoción", estado : "Trabajando" },
			 { nombre : "Maria", apellido : "Rosán",  promocion : "2da. promoción", estado : "Trabajando" },
			 { nombre : "Guadalupe", apellido : "Racio",  promocion : "3era. promoción", estado : "Trabajando" },
			 { nombre : "Sara", apellido : "Casa",  promocion : "3era. promoción", estado : "Trabajando" },
			 { nombre : "Daniella", apellido : "Durán",  promocion : "4ta. promoción", estado : "Trabajando" },
			 { nombre : "Michelle", apellido : "Seguil",  promocion : "5ta. promoción", estado : "Trabajando" },
			 { nombre : "Diana", apellido : "Navarro",  promocion : "5ta. promoción", estado : "Trabajando" } ];

// var a1 = document.getElementById('a1');
// var a2 = document.getElementById('a2');
// var a3 = document.getElementById('a3');
// var a4 = document.getElementById('a4');
// var a5 = document.getElementById('a5');
// var a6 = document.getElementById('a6');
// var a7 = document.getElementById('a7');
// var a8 = document.getElementById('a8');
// var alumnas = [a1,a2,a3,a4,a5,a6,a7,a8];
//
//
// a1.innerHTML = "Nombre: " + Mercedes
// for(var i = 0; i<alumnas.length; i++){
// 	alumnas[i].innerHTML = "Nombre: "+coders[i].nombre
// }

//Mimi... pégate un tiro cada vez que veas esto.
//El código anterior no te funcionaba porque te falto cerrar la etiqueta p!!!! T_T

var cuadritos = document.getElementsByClassName('div-coder');

for(var i = 0; i<alumnas.length; i++){
	//cuadritos[i].innerHTML = "a";
	cuadritos[i].innerHTML = "<p>"+"Nombre: "+alumnas[i].nombre+"</p>"+
														"<p>"+"Apellido: "+alumnas[i].apellido+"</p>"+
														"<p>"+"Promoción: "+alumnas[i].promocion+"</p>"+
														"<p>"+"Estado: "+alumnas[i].estado+"</p>"
}


function volver(){
	window.location='../../index.html';
}
