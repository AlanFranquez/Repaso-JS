// el DOM es como un arbol del html
// el cual son numerosas raices las cuales pueden conectar algo con otro y asi sucesivamente
// por ejemplo un h1, tiene un texto adentro, el cual puede ser modificado, tambien tiene otra rama hacia sus atributos

// Generalmente se accede al dom con el comando document

let documento;

documento = document.body; // Para acceder al body
documento = document.head // Acceder al head del html
documento = document.domain // el dominio
documento = document.forms
documento = document.forms[0]
documento = document.forms[0].id
documento = document.forms[0].classList // da toda la clase entera, como atributo
documento = document.forms[0].className // da el nombre de la clase


documento = document.links;

documento = document.links[2];
documento = document.links[2].href;
documento = document.links[2].classList;
documento = document.links[2].id;

// Tambien podemos averiguar las imagenes de los documentos
documento = document.images;

documento = document.scripts



console.log(document)
console.log(documento)