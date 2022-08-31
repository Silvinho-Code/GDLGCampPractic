console.log("1");

(function(){
    'use strict';
    document.addEventListener('DOOMContentLoaded', function(){
        
        //getElementById
        //var logo = document.getElementById('logo');
        /**
            Manera corta para obtner el elemento por Id

            var logo = document.getElementById('logo');     la variable tema el valor de todo el codigo que hemos escrito

            console.log(logo);
        */
        /*var navegacion = document.getElementById('navegacion');
        console.log(navegacion);
        navegacion.style.display ="none";*/

        //getElementsByClassName
        /*
        var navegacion = document.getElementsByClassName('navegacion');
        console.log(navegacion);

        var contenido = document.getElementsByClassName('contenido');
        console.log(contenido);

        contenido.style.display = 'none';
        */
        //getElementsByTagName

        /*
        var enlaces = document.getElementsByTagName('a');
        console.log(enlaces.length);

        for(var i=0; i < enlaces.length; i++){
            enlaces[1].setAttribute('target', '_blank');
        }

        var enlacesSidebar = document.getElementById('sidebar').getElementsByTagName('a');
        console.log(enlacesSidebar);

        for(var i=0; i < enlacesSidebar.length; i++){
            enlacesSidebar[i].setAttribute('href', 'http://www.google.com');
        }
        */

        //querySelector
        /*
        var logo = document.querySelector('.logo');
        console.log(logo);

        var encabezado = document.querySelectorAll('h2, footer p');
        console.log(encabezado);

        var enlaces = document.querySelectorAll('a');
        console.log(enlaces);
        */

        //querySelectorAll
        /*
        var enlaces = document.querySelectorAll('a');

        for(var i=0; i < enlaces.length; i++){
            console.log(enlaces[i].innerText);
        }
        */
        /*
        var enlaces = document.querySelectorAll('#menu ul li a');
        console.log(enlaces.nodeType);
        console.log(enlaces.nodeName);
        console.log(enlaces.attributes[0]);
        console.log(enlaces.firstchild);
        console.log(enlaces.firstchild.nodeValue);

        enlaces.firstchild.nodeValue = "Home";
        enlaces.id = "mi_id";
        */

        //Crear contenido
        /*
        var sidebar = document.querySelector('#sidebar');
        var nuevoElemento = document.createElement("H1");
        var nuevoTexto = document.createTextNode("Hola Mundo");
        nuevoElemento.appendChild(nuevoTexto);
        sidebar.appendChild(nuevoElemento)

        //Agregar entrada 6
        var enlacesSidebar = document.querySelectorAll('#sidebar ul');
        //Creando el enlace
        var nuevoEnlace = document.createElement('A');
        nuevoEnlace.setAttribute('href', 'http://google.com');
        var textoEnlace = document.createTextNode('Entrada 6');
        nuevoEnlace.appendChild(textoEnlace);
        //Creando la lista
        var nuevaLista = document.createElement('LI');
        nuevaLista.appendChild(nuevoEnlace);
        //Lo agregamos al menu
        enlacesSidebar[0].appendChild(nuevaLista);
        */

        //Clonar nodo
/*
        var contenido = document.querySelectorAll('main');
        var nuevoContenido = contenido[0].cloneNode(true);

        var sidebar = document.querySelector('aside');

        sidebar.insertBefore(nuevoContenido, sidebar.childNodes[5]);

        */
        //Creando lista de post populares
        /*
        var sidebar = document.querySelector('aside');

        var masVisitados = document.createElement('H2');
        var textoVisitados = document.createTextNode('Post más viditados');
        masVisitados.appendChild(textoVisitados);
        sidebar.insertBefore(masVisitados, sidebar.childNodes[0]);

        var contenido = document.querySelectorAll('main h2');

        for(var i = 0; i < contenido.length; i++);{
            var nuevoElemento = document.createElement('LI');
            var nuevoTexto = document.createTextNode(contenido[1].firstChild.nodeValue);
            nuevoElemento.appendChild(nuevoTexto);
            sidebar.insertBefore(nuevoElemento, sidebar.childNodes[1]);0
        }
        */

        //Eliminar nodos
        /*
        var primerPost = document.querySelector('main article');
        console.log(primerPost);

        var enlaces = document.querySelector('#navegcion ul li a');
        console.log(enlaces);
        enlaces.parentNode.removeChild(enlaces);
        */
        /*
        var viejoNodo = document.querySelector('main h2');
        var nuevoNodo = document.querySelector('footer h2');
        viejoNodo.parentNode.replaceChild(nuevoNodo, viejoNodo);
        */

        //Reemlazar nodo conuno nuevo

        var nuevoTitulo = document.createElement('H2');
        var nuevoTexto = document.createTextNode('Hola Mundo');
        nuevoTitulo.appendChild(nuevoTexto);

        var viejoNodo = document.querySelector('main h2');
        viejoNodo.parentNode.replaceChild(nuevoTitulo, viejoNodo);

    });

})();
console.log("3");

