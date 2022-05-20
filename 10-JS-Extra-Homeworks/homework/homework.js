// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  const arreglo = [];
  arreglo.push(Object.entries(objeto));

  return arreglo;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí
  var contador = {};
  for (var i of string) {
    if (contador[i]) {
      //contador[i] es equivalente a "si existe"
      contador[i]++;
    } else {
      contador[i] = 1;
    }
  }
  return contador;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  let string = [], //aca deposito valores
    start = 0; //le doy valor al contador para el splice. Para arrancar desde 0.

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      // aca digo si la letra es igual a la letra mayuscula
      string.splice(start, 0, s[i]); //el contador arranca desde 0 (primer valor), elimina 0 elementos (valor 2) y agrega el elemento i al punto de start que ahora sera uno mas q el anterior
      start++; //le suma 1 al contador de start para el splice
    } else {
      string.push(s[i]); //de lo contrario, directamente lo manda al final del array
    }
  }
  return string.join("");
}

console.log(capToFront("soyHENRY")); //HENRYsoy

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  let nuevaFrase2 = [];

  for (let i = 0; i < str.length; i++) {
    nuevaFrase2.unshift(str[i]); // primero doy vuelta todo el string y lo paso a un array
  }

  return nuevaFrase2.join("").split(" ").reverse().join(" ");
  // join(""): une a todo el array nuevaFrase2 en un string> !esolc si egnellahC yrneH ehT. Lo tenes q pasar a string con el join para luego usar el split con el espacio (" ") para separar las palabras por espacio y pasarlos a arrays.
  //split: separar las palabras por espacio y pasarlos a arrays.
  //reverse() para dar vueltas todos los strings nuevamente pq habian quedado todo dado vuelta por el unshift inicial
  // join(" "): finalmente los une a todos los objetos del array en un string poniendo un espacio entre cada array, es decir, palabra ahora q lo convertimos a string
}
console.log(asAmirror("The Henry Challenge is close!"));

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  numeroString = numero.toString();

  if (numero == Number(numero.toString().split("").reverse().join(""))) {
    // con el string paso el numero a string para luego aplicarle el split para pasarlo al array y asi aplicarle el reverse. Luego doy vuelta el array con el reverse y le meto join para juntar los arrays ya dado vuelta de forma que quede el string dado vuelta. El Number al principio convierte el string que termina quedando a numero.
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}
console.log(capicua(4221124)); // No es capicua
console.log(capicua(4221224)); // Es capicua

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  function deleteAbc(cadena) {
    //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
    //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
    //Escribe tu código aquí
    let cadenaModificada = "";
    let eliminar = ["a", "b", "c"];

    for (let i = 0; i < i < cadena.length; i++) {
      if (eliminar.includes(cadena[i])) continue; // el include es para chequear si un arreglo tiene cierto elemento
      cadenaModificada = cadenaModificada + cadena[i];
    }
  }
  // Otra forma de hacerlo:
  function deleteAbc(cadena) {
    let newString = [];

    for (let i = 0; i < cadena.length; i++) {
      if (cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c") {
        newString.push(cadena[i]);
      }
    }
    return newString.join("");
  }
  console.log(
    deleteAbc("Wake me up before i go go... (not sure how the song continues)")
  );
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let contador = 0;

  while (contador < arr.length) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].length > arr[i + 1].length) {
        // si la longitud del nuevo elemento de arr es mayor a la longitud del elemento siguiente de arr
        let guardado = arr[i];
        // guardado equivale al nuevo elemento de arr
        arr[i] = arr[i + 1];
        // elemento nuevo del arr pasa a ser el siguiente elemento del array
        arr[i + 1] = guardado;
        // y el siguiente elemento del array equivale a guardado
      }
      contador++;
    }
  }
  return arr;
}

console.log(sortArray(["You", "are", "beautiful", "looking"]));
function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  let inter = [];

  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j]) {
        inter.push(arreglo1[i]);
      }
    }
  }
}

// Otra forma de hacerlo:
function buscoInterseccion3(arreglo1, arreglo2) {
  const nuevoArreglo = arreglo1.filter((value) => arreglo2.includes(value));
  return nuevoArreglo;
}
console.log(buscoInterseccion3([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]));

// Otra forma de hacerlo:
function buscoInterseccion(arreglo1, arreglo2) {
  bothValues = [];

  for (let i = 0; i < arreglo1.length; i++) {
    if (arreglo2.includes(arreglo1[i])) {
      bothValues.push(arreglo1[i]);
    } else {
      continue;
    }
  }
  return bothValues;
}

console.log(buscoInterseccion([4, 2, 3, 1, 2], [7, 7, 3, 1, 8]));

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
