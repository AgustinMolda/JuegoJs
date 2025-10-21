let bucleInfinito={
    id:null,
    fin:0, //Fin del ciclo
    aps:0, //Actualzaciones por segundo
    fps:0, //Frames por segundo
    bucle:function(tiempo){
        bucleInfinito.id=window.requestAnimationFrame(bucleInfinito.bucle);
        
        bucleInfinito.actualizar();
        bucleInfinito.referscar();

        let diferencia= tiempo-bucleInfinito.fin;
        if(diferencia > 999){
            console.log(`
                fin= ${bucleInfinito.fin}\n
                tiempo= ${tiempo}
                difrencia= ${diferencia}\n
                aps= ${bucleInfinito.aps}\n
                fps= ${bucleInfinito.fps}\n
                id= ${bucleInfinito.id}\n

                `);
            bucleInfinito.fin=tiempo;
            bucleInfinito.fps=0;
            bucleInfinito.aps=0;
        }
    },

    actualizar: function(){
        bucleInfinito.aps++;

    },

    referscar: function(){
        bucleInfinito.fps++;
    }

}