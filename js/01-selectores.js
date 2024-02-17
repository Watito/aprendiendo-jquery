$(document).ready(function () {

    // Selector de ID

    $("#rojo").css("background", "red")
        .css("color", "white");

    $("#amarillo").css("background", "yellow")
        .css("color", "green");

    $("#verde").css("background", "green")
        .css("color", "yellow");


    // Selectores de Clase

    var mi_clase = $(".zebra").css("padding","5px");
    
    $(".sin_borde").click(function(){
        $(this).addClass('zebra');
        console.log("clic clic clic la foto");
    });
// Selectores de etiqueta
    var parrafos = $("p").css("cursor","pointer");

    parrafos.click(function(){
        var dis = $(this); 
        if (!dis.hasClass("grande")) {
            dis.addClass("grande");
        }else{
            dis.removeClass("grande");
        }
        
    });

    // Selectores de atributo
   
    $('[title="Google"]').css("background","#ccc");
    $('[title="Feibum"]').css("background","blue");
    
    // Otros
    // $('p,a').addClass('margen-superior');

    var busqueda = $("#elemento2").parent().parent().find('.resaltado');

    console.log(busqueda);



});