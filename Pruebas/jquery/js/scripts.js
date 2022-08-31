$(function() {
    'used strict';
    
    $('.nuestros-servicios div:first').show();
    $('.servicios nav a:first').addClass('activo');

    $('.servicios nav a').on('click', mostrarTabs);

    function mostrarTabs() {
        $('.servicios nav a').removeClass('activo');
        $(this).addClass('activo');
        var enlace = $(this). attr('href');
        $('.nuestros-servicios div').fadeOut();
        $(enlace).fadeIn();

        return false;
    }

    /*
    var proximosViajes = ['Londres', 'Valencia', 'Madrid', 'Paris', 'Milan'];
    $.each(proximosViajes, function(i, v) {
        if(i==0) {
            $('aside').append('<h2>Próximos Viajes</h2>');
        }
        $('aside').append('<li>' + v + '</li>');
    })

    var viajesPorFecha = {
        primero: 'Londres',
        segundo: 'Valencia',
        tercero: 'Madrid',
        cuarto: 'Paris',
        quinto: 'Milan'
    };
    console.log(viajesPorFecha);

    $.each(viajesPorFecha, function(i, v) {
        $('aside').append('<li>' + i + ' - ' + v + '</li>');
    });

    /*AJAX      AJAX        AJAX    AJAX        AJAX*/
/** 
    $('aside').load('promociones.html');
    */
/*
    $('div.logo img').on('click', cargarAjax);

    function cargarAjax() {
        $.ajax('promociones.txt', {
            success: agregarContenido,
            type: 'GET',
            datatype: 'text'
        });
    }
    function agregarContenido(data, status, jqxhr){
        $('aside').text(data);
        console.log(status);
    }
*/






    /*
    $('.logo img').click(function() {
        $('main article:first').slideUp(1000);
    });
    $('aside').click(function() {
        $('main article:first').slideDown(1000);
    });

    /*
    $('.logo img').on('click', function() {
        $(this).animate({'widht': '200px'}, 1000);
    });

    $('main article img').on('mouseenter', aumentarImagen);
    $('main article img').on('mouseleave', disminuirImagen);

    function aumentarImagen() {
        $(this).animate({'width': '100%'});
    }
    function disminuirImagen() {
        $(this).animate({'width': '350px'});
    }

    /*
    $('.navegacion').show();
    
    $('.logo img').css({'width': '400px'});
    
    $('main article h2').css({'color': '#db008d'});

    $('aside').css({'background-color': '#e1e1e1',
                    'text-transform': 'uppercase',
                    'padding': '20px'
    })

    $('.navegacion ul li a').on('mouseenter', cambiarcolor);

    function cambiarcolor() {
        $('.navegacion').css('background-color', 'red');
    }
    */

    /*
    $('main aticle:first img').on('click', function() {
        $(this).attr('src', 'img/imagen_2.jpg');
    });
    */
    /*    
    $('main').on({
        click: function() {
            $(this).addClass('fondorojo activo');
        }, mouseenter: function() {
            $(this).addClass('fondorojo');
        }, mouseleave: function() {
            $(this).addClass('activo');
        }
    });
    */

    /*
    $('div.logo img').addClass('activo');

    $('.navegacion').show();
    $('main article:first').addClass('activo');

    $('.navegacion ul li a').on('click', function(e) {
        $('.navegacion ul li a').removeClass('activo');
        e.preventDefault();
        $(this).addClass('activo');
    });
    */

    /*
    $('#menu').on('click', function() {
        $('#navegacion').show();
    });
    */

    /*
    $('div.logo img').on('mouseenter', function() {
        console.log('Sobre el logo');
    });

    $('div.logo img').on('mouseleave', function() {
        console.log('Fuera del logo');
    });
    */

    /*
    $('div.logo img').on('click', function() {
        $(this).remove();
    });
    */
   
    /*
    $('div.logo img').on('click', function() {
       console.log('Has hecho click en el logo'); 
    });
    */

    /*
    $('main article:first').hide();
    */
   
    /*
    var copia = $('main article:last').clone();
    $('main').prepend(copia);
    */
    
    /*
    var copia = $('main article:last').clone();
    $(copia).appendTo('main');
    */


});