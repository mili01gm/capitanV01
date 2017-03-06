var coders = [ { nombre : "Meche", apellido : "Zubieta",  promocion : "1era. promoción", estado : "Trabajando" },
			 { nombre : "Arabela", apellido : "Rojas", promocion : "2da. promoción", estado : "Trabajando" },
			 { nombre : "Maria", apellido : "Rosán",  promocion : "2da. promoción", estado : "Trabajando" },
			 { nombre : "Guadalupe", apellido : "Racio",  promocion : "3era. promoción", estado : "Trabajando" },
			 { nombre : "Sara", apellido : "Casa",  promocion : "3era. promoción", estado : "Trabajando" },
			 { nombre : "Daniella", apellido : "Durán",  promocion : "4ta. promoción", estado : "Trabajando" },
			 { nombre : "Michelle", apellido : "Seguil",  promocion : "5ta. promoción", estado : "Trabajando" },
			 { nombre : "Diana", apellido : "Navarro",  promocion : "5ta. promoción", estado : "Trabajando" } ];

var alumnas = document.getElementsByClassName('alumnas');
var i;

  alumnas.forEach(function(e){
  this.innerHTML = "Nombre: " + coders[e].nombre +"<br>"+
                   "Apellido: " + coders[e].apellido +"<br>"+
                   "Promoción: " + coders[e].promoción +"<br>"+
                   "Estado: " + coders[e].estado
  })
