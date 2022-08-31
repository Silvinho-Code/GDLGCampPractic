(function() {
    "use strict";

    var regalo = document.getElementById('regalo');
    document.addEventListener("DOMContentLoaded", function(){

        var map = L.map('mapa').setView([12.339121, -86.67316], 15);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([12.339121, -86.67316]).addTo(map)
        .bindPopup('GDLWebCamp 2018 <br> Boletos ya disponibles.')
        .openPopup()
        .binTooltip('Un Tooltip')
        .openTooltip();

        //Campos datos usuarios
        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var email = document.getElementById('email');

        //Campos pases
        var pase_dia = document.getElementById('pase_dia');
        var pase_dosdias = document.getElementById('pase_dosdias');
        var pase_completo = document.getElementById('pase_completo');

        //Botones y Divs
        var calcular = document.getElementById('calcular');
        var errorDiv = document.getElementById('error');
        var botonRegistro = document.getElementById('btnRegistro');
        var lista_productos = document.getElementById('lista-productos');
        var suma = document.getElementById('suma-total');

        //Extras
        var camisas = document.getElementById('camisa_evento');
        var etiquetas = document.getElementById('etiquetas');

        calcular.addEventListener('click', calcularMontos);

        pase_dia.addEventListener('blur', mostrarDias); /** blur nos ayuda a capturar lo que se ingrese en el campor aunque no sea con clicks */
        pase_dosdias.addEventListener('blur', mostrarDias);
        pase_completo.addEventListener('blur', mostrarDias);

        nombre.addEventListener('blur', validarCampos);
        apellido.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarMail);

        botonRegistro.disabled = true;

        function validarCampos() {
            if(this.value == '') {
                errorDiv.style.display = 'block';
                errorDiv.innerHTML = "Este campo es obligatorio";
                this.style.border = '1px solid red';
                errorDiv.style.border = '1px solid red';
            } else {
                errorDiv.style.display = 'none';
                this.style.border = '1px solid #cccccc';
            }
        }

        function validarMail() {
            if(this.value.indexOf('@') > -1) {
                errorDiv.style.display = 'none';
                this.style.border = '1px solid #cccccc';
            } else {
                errorDiv.style.display = 'block';
                errorDiv.innerHTML = "Debe tener al menos un @";
                this.style.border = '1px solid red';
                errorDiv.style.border = '1px solid red';
            }
        }


        function calcularMontos(event){
            event.preventDefault();
            if(regalo.value === ''){
                alert("Debes elegir un regalo");
                regalo.focus();
            } else {
                var boletosDia = parseInt(pase_dia.value, 10) || 0,
                    boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
                    boletoCompleto = parseInt(pase_completo.value, 10) || 0,
                    cantCamisas = parseInt(camisas.value, 10) || 0,
                    cantEtiquetas = parseInt(etiquetas.value,  10) || 0;

                var totalPagar = (boletosDia * 30) + (boletos2Dias * 45) + (boletoCompleto * 50) + ((cantCamisas * 10 ) * .93) + (cantEtiquetas * 2);
                
                var listaProductos = [];

                if (boletosDia >= 1) {
                    listaProductos.push(boletosDia + ' Pases por día');
                }
                if (boletos2Dias >= 1) {
                    listaProductos.push(boletos2Dias + ' Pases por 2 día');
                }
                if (boletoCompleto >= 1) {
                    listaProductos.push(boletoCompleto + ' Pases Completos');
                }
                if (cantCamisas >= 1) {
                    listaProductos.push(cantCamisas + ' Camisas');
                }
                if (cantEtiquetas >= 1) {
                    listaProductos.push(cantEtiquetas + ' Etiquetas');
                }

                lista_productos.style.display = "block";
                lista_productos.innerHTML = ' ';
                for (var i = 0; i < listaProductos.length; i++) {
                    lista_productos.innerHTML += listaProductos[i] + '<br/>';
                }
                
                suma.innerHTML = "$ " + totalPagar.toFixed(2);

                botonRegistro.disabled = false;
                document.getElementById('total_pedido').value = totalPagar;
            }
        }

        function mostrarDias(){
            var boletosDia = parseInt(pase_dia.value, 10) || 0,
                boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
                boletoCompleto = parseInt(pase_completo.value, 10) || 0;
                
                var diasElegidos = [];

                if (boletosDia > 0){
                    diasElegidos.push('viernes');
                    console.log(diasElegidos);
                }
                if(boletos2Dias > 0){
                    diasElegidos.push('viernes', 'sabado');
                    console.log(diasElegidos);
                }
                if (boletoCompleto > 0){
                    diasElegidos.push('viernes', 'sabado', 'domingo');
                    console.log(diasElegidos);
                }
                for (var i = 0; i < diasElegidos.length; i++){
                    document.getElementById(diasElegidos[i]).style.display = 'block';
                }
        }

    }); //DOM CONTENT LOADED
}) ();


$(function() {

    //Lettering
    $('.nombre-sitio').lettering();

    // Agregarclase a Menu

    // de esta manera se puede crear una funcion en JavaScript sin tener que hacer otra con mucho codigo en PHP.
    $('body.conferencia .navegacion-principal a:contains("Conferencia")').addClass('activo');
    $('body.calendario .navegacion-principal a:contains("Calendario")').addClass('activo');
    $('body.invitados .navegacion-principal a:contains("Invitados")').addClass('activo');

    //Menu Fijo

    var windowHeight = $(window).height();
    var barraAltura = $('.barra').innerHeight();
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if(scroll > windowHeight) {
            $('.barra').addClass('fixed');
            $('body').css({'margin-top': barraAltura+'px'});
        } else {
            $('.barra').removeClass('fixed');
            $('body').css({'margin-top': '0px'});
        }
    });

    // Menu Responsive

    $('.menu-movil').on('click', function() {
        $('.navegacion-principal').slideToggle();
    });

    //Programa de Conferrencia
    $('.programa-evento .info-curso:first').show();
    $('.menu-programa a:first').addClass('activo');

    $('.menu-programa a').on('click', function() {
        $('.menu-programa a').removeClass('activo');
        $(this).addClass('activo');
        $('.ocultar').hide();
        var enlace = $(this).attr('href');
        $(enlace).fadeIn(1000); //fadeIn, da un efecto de aparicion despues de un click.
        return false;

    });

    //Animaciones para los Numeros
    var resumenLista = jQuery('.resumen-evento');
    if(resumenLista.length > 0 ) {
        $('.resumen-evento').waypoint(function() {
            $('.resumen-evento li:nth-child(1) p').animateNumber({number: 6}, 2500);
            $('.resumen-evento li:nth-child(2) p').animateNumber({number: 15}, 2500);
            $('.resumen-evento li:nth-child(3) p').animateNumber({number: 3}, 2500);
            $('.resumen-evento li:nth-child(4) p').animateNumber({number: 9}, 2500);
        },  {
            offset: '60%'
        });
    }


    //Cuenta Regresiva

    $('.cuenta-regresiva').countdown('2020/7/12 05:00:00', function(event){
        $('#dias').html(event.strftime('%D'));
        $('#horas').html(event.strftime('%H'));
        $('#minutos').html(event.strftime('%M'));
        $('#segundos').html(event.strftime('%S'));
    });

    // color box

    $('.invitado-info').colorbox({inline:true, width:"50%"});

});