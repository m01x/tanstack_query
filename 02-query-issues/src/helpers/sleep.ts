export const sleep = (milisegundos : number) => {

    return new Promise( r => {
        setTimeout(() => {
          r(true);
        }, milisegundos);
    } );
    
}