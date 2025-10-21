    document.addEventListener('DOMContentLoaded', function(){
        console.log("inicia juego");
        //console.log("Tomamos medidas");
        medidas.tomaMedida();
    });

let start = document.getElementById('start');


start.addEventListener('click', function(){
    bucleInfinito.bucle();
   
});

window.addEventListener('resize', function(){
    console.log("Se hizo un resize");
});