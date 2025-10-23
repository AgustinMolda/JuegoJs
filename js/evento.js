    document.addEventListener('DOMContentLoaded', function(){
        console.log("inicia juego");
        let a1 = new area(0,30,100,100);
        let a2 = new area(100,30,100,100);
        medidas.tomaMedida();
        medidas.dibujarTiles();
        teclas.iniciar();
    });

let start = document.getElementById('start');


start.addEventListener('click', function(){
    bucleInfinito.bucle();
   
});

let mostrar = document.getElementById("mostrar");

mostrar.addEventListener('click', function(){
    teclas.mostrarTeclas();
});

window.addEventListener('resize', function(){
   medidas.dibujarTiles();
});