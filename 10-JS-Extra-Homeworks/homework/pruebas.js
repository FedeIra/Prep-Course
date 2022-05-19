function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí

  // Defino el primer array con las palabras:
  let arrayLetras = string.split("");

  let arrayLetras2 = [];

  let arrayNumeros = [];

  for (let i = 0; i < arrayLetras.length; i++) {
    if (arrayLetras2.indexOf(arrayLetras[i]) === -1) {
      arrayLetras2.push(arrayLetras[i]);
      arrayNumeros.push(1);
    } else {
      arrayNumeros[i + 1];
    }
  }
  return arrayNumeros;
}
console.log(numberOfCharacters("fede"));

/*
  // Defino segundo array con numeros
  let arrayNumeros = [];

  for (let i = 0; i < arrayLetras.length; i++) {
    if (arrayLetras) {
    }
    nuevoArray.push(alumnos[i].capitalize()); //aprovecho la funcion capitalize para ponerle mayuscula
  }
  // Paso el array a objeto asignandole 0 como valor:

  let objeto = {};

  for (let i = 0; i < arrayLetras2.length; i++) {
    objeto[arrayLetras2[i]] = 0;
  }
  return objeto;
  // Asignarle nuevo valor
}

*/
