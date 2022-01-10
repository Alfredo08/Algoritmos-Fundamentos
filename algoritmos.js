
/*
    Escribe una función llamada sumatoria. Esta función tiene como parámetro un arreglo de números.
    La función debe de calcular y retornar la suma de todos los números en el arreglo.
    Ejemplo:
        let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let resultado = sumatoria( nums );
        // El resultado debe ser 55.
*/

function sumatoria( nums ){
    let suma = 0;

    for( let i = 0; i < nums.length; i ++ ){
        suma = suma + nums[i];
        // console.log( "Suma: ", suma );
        // console.log( "Numero: ", nums[i] );
    }

    return suma;
}
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultadoSuma = sumatoria( nums );
console.log( resultadoSuma );

/*
    Escribe una función llamada numeroMayor. Esta función tiene como parámetro un arreglo de números.
    La función debe de encontrar y retornar el número más grande dentro del arrelgo.
    Ejemplo:
        let nums = [ 6, 2, 8, 3, 5, 1, 10, 4, 9, 7];
        let resultado = numeroMayor( nums );
        // El resultado debe de ser 10.
        // También puede tener el arreglo números negativos
*/
function numeroMayor( nums ){
    let mayor = nums[0];

    for( let i = 0; i < nums.length; i ++ ){
        // console.log( "Mayor: ", mayor, "Nums: ", nums[i] );        
        if( mayor < nums[i] ){
            mayor = nums[i];
        }
    }
    return mayor;
}

let nums2 = [ 6, 2, 8, 3, 5, 1, 10, 4, 9, 7];
let resultadoMayor = numeroMayor( nums2 );
console.log( resultadoMayor );


