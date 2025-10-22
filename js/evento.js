    document.addEventListener('DOMContentLoaded', function(){
        console.log("inicia juego");
        let a1 = new area(0,30,100,100);
        medidas.tomaMedida();
    });

let start = document.getElementById('start');


start.addEventListener('click', function(){
    bucleInfinito.bucle();
   
});

window.addEventListener('resize', function(){
    console.log("Se hizo un resize");
});