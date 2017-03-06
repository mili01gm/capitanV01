var coder;
var saludo = document.getElementById('saludo');

window.addEventListener('load',function(){
  coder = prompt("Coder, cuál es tu nombre?");
  saludo.innerHTML = "Hola coder "+ coder
  window.removeEventListener('load', load, false);
});



function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

//Botones
var s1 = document.getElementById('s1');
var s2 = document.getElementById('s2');
var s3 = document.getElementById('s3');
var floro = document.getElementById('floro');



s1.addEventListener('click', function(){
  floro.innerHTML = "<h2>"+"Sprint 1: Introducción a Javascript"+"</h2>"+
                    "<ol>"+"<li>"+"Fundamentos de Programación"+"</li>"+
                           "<li>"+"Funciones"+"</li>"+
                           "<li>"+"Arreglos"+"</li>"+
                           "<li>"+"Objetos"+"</li>"+"</ol>"
});

s2.addEventListener('click', function(){
  floro.innerHTML = "<h2>"+"Sprint 2: Introducción al desarrollo web y construcción de páginas web"+"</h2>"+
                    "<ol>"+"<li>"+"Ciclo de vida del desarrollo web"+"</li>"+
                           "<li>"+"HTML y Javascript en el navegador"+"</li>"+
                           "<li>"+"Manejo de comandos básicos de git en la terminal"+"</li>"+
                           "<li>"+"Pruebas unitarias"+"</li>"+
                           "<li>"+"Git / Rosolución de conflictos / Branching model"+"</li>"+
                           "<li>"+"DOM"+"</li>"+"</ol>"
});

s3.addEventListener('click', function(){
  floro.innerHTML = "<h2>"+"Sprint 3"+"</h2>"+"<br>"+
                    "<p>"+"No hay lecciones todavía"+"</p>"
});
