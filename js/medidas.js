let medidas= {
    ancho: window.innerWidth || document.documentElement.clientWidth   || document.body.clientWidth,
    alto : window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,

    tomaMedida: function(){
        window.addEventListener('resize', function(){
                    medidas.ancho = window.innerWidth || document.documentElement.clientWidth   || document.body.clientWidthM;
                    medidas.alto = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

                    console.log(`
                        
                      ancho:  ${medidas.ancho} \n
                      alto:   ${medidas.alto}  \n 
                        
                        `)
        });
    }


}