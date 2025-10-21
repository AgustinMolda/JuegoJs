let bucleInfinito={
    id:null,
    fin:0, //Fin del ciclo
    aps:0, //Actualzaciones por segundo
    fps:0, //Frames por segundo
    bucle:function(tiempo){
        bucleInfinito.id=window.requestAnimationFrame(bucleInfinito.bucle);
        let diferencia= tiempo-bucleInfinito.fin;
        if(diferencia > 999){
            console.log(`
                fin= ${bucleInfinito.fin}\n
                tiempo= ${tiempo}
                difrencia= ${diferencia}\n

                `);
            bucleInfinito.fin=tiempo;
        }
    }

}