
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
//console.log( resultadoSuma );

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

nums = [ 6, 2, 8, 3, 5, 1, 10, 4, 9, 7];
let resultadoMayor = numeroMayor( nums );
//console.log( resultadoMayor );


/*
    Escribe una función llamada promedio. Esta función tiene como parámetro un arreglo de números.
    La función debe de calcular y retornar el promedio de los números en el arreglo.
    Ejemplo:
        let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let resultado = promedio( nums );
        // El resultado debe ser 5.5.
*/

function promedio( nums ){
    let suma = 0;

    for( let i = 0; i < nums.length; i ++ ){
        suma += nums[i];
    }

    let prom = suma / nums.length;
    return prom;
}
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultadoPromedio = promedio( nums );
//console.log( resultadoPromedio );


/*
    Escribe una función llamada existeElemento. Esta función tiene como parámetro un arreglo de números 
    y un número individual. La función debe de indicar si el número se encuentra dentro del arreglo.
    De ser el caso retornar "El número 'x' se encuentra en la posición 'y' del arreglo", de lo contrario
    retornar "El número no se encuentra en el arreglo"
    Ejemplo:
        let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let num = 8;
        let resultado = existeElemento( nums, num );
        // "El número 8 se encuentra en la posicón 7 del arreglo"
*/

function existeElemento( nums, num ){

    for( let i = 0; i < nums.length; i ++ ){
        if( num === nums[i] ){
            return `El número ${num} se encuentra en el índice ${i} del arreglo`;
            //return "El número " + num + " se encuentra en el índice " + i + " del arreglo";
        }
    }

    return `El número ${num} no se encuentra en el arreglo`;
}
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num = 8;

let resultadoExiste = existeElemento( nums, num );
//console.log( resultadoExiste );

/*
    Escribe una función llamada esNumeroPrimo. Esta función tiene como parámetro un número entero.
    La función debe de calcular y retornar 'true' si el número es primo, 'false' de lo contrario.
    Algunos números primos: 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29
*/
function esNumeroPrimo( num ){
    let contador = 0;

    for( let i = 1; i <= num; i ++ ){
        if( num % i === 0 ){
            contador ++;
        }
    }

    if( contador === 2 ){
        return true;
    }
    else{
        return false;
    }
}
num = 10;
let resultadoEsPrimo = esNumeroPrimo( num );
//console.log( resultadoEsPrimo );

/*
    Escribe una función llamada encuentraElementos. Esta función tiene como parámetro un arreglo de números 
    y un número individual. La función debe de encontrar cuántas veces se encuentra el número dentro del arreglo.
    Así como los índices donde se encontró el número. La función retorna un objecto con la siguiente estructura:
    Ejemplo:
        let nums = [1, 2, 3, 8, 5, 8, 7, 8, 9, 10];
        let num = 8;
        let resultadoEncuentra = encuentraElementos( nums, num );
        {
            numero : 8,
            contador : 3,
            posiciones : [3, 5, 7]
        }
*/

function encuentraElementos( nums, num ){
    let contador = 0;
    let posiciones = [];

    for( let i = 0; i < nums.length; i ++ ){
        if( nums[i] === num ){
            contador ++;
            posiciones.push( i );
        }
    }

    let obj = {
        contador,
        posiciones,
        numero : num
    };

    return obj;
}

nums = [1, 2, 3, 8, 5, 8, 7, 8, 9, 10];
num = 8;
let resultadoEncuentra = encuentraElementos( nums, num );
//console.log( resultadoEncuentra );

/*
    Escribe una función llamada factorial. Esta función tiene como parámetro un número entero. 
    La función debe de calcular el factorial del número proporcionado y retornar el resultado.
    Un factorial se calcula de la siguiente manera: 5! = 1 * 2 * 3 * 4 * 5 = 120
*/

function factorial( num ){

    if( num < 0 ){
        return "No se puede calcular el factorial de un negativo.";
    }

    let resultado = 1;
    for( let i = 1; i <= num; i ++ ){
        resultado *= i;
    }
    return resultado;
}

num = 0;
let resultadoFactorial = factorial( num );
//console.log( resultadoFactorial );

/*
    Escribe una función llamada sumaNumerosPositivos. Esta función tiene como parámetro un arreglo de números. 
    La función debe de sumar todos los números positivos dentro del arreglo y retornar su resultado.
    (Utilizar funciones avanzadas de arreglos)
    Ejemplo:
        let nums = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
        let resultadoSumaPositivos = sumaNumerosPositivos( nums );
        // El resultado debe de ser 25
*/

function sumaNumerosPositivos( nums ){

    let filtroPositivos = nums.filter( function( num ) {
        if( num > 0 ){
            return num;
        }
    });
    
    let suma = 0;

    filtroPositivos.forEach( function( num ) {
        suma += num;
    });

    return suma;
}

nums = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
let resultadoSumaPositivos = sumaNumerosPositivos( nums );
console.log( resultadoSumaPositivos );