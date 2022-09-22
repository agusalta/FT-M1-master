'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
 // caso base 

  if (array.length <= 1) {
  return array
  }

// iteracion

  var izquierda = [];
  var derecha = [];
  var iguales = [];
  var pivot = array[Math.floor(Math.random() * array.length)] // elige un index random
  
    for (let i = 0; i < array.length; i++) { // [5, 1, 4, 2, 8] 
      if (array[i] > pivot) { 
        derecha.push(array[i])
      } 
      if (array[i] < pivot) {
        izquierda.push(array[i])
      } 
      if (array[i] === pivot) {
        iguales.push(array[i])
      }
    }
  
  // recursion

  return quickSort(izquierda).concat(iguales).concat(quickSort(derecha));
}

function mergeSort(array) { // [5, 1, 4, 2, 8] 
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // caso base 

  if (array.length < 2) {
     return array
  }

  // iteracion
  const half = Math.floor(array.length / 2);
  var left = array.slice(0, half); // no incluye 'half'
  var right = array.slice(half, array.length); // de por si, .slice ya llega hasta el final del array.length
   // half
  
  array = [];

  left = mergeSort(left);
  right = mergeSort(right);
  
  while(left.length && right.length) {
    if (left[0] < right[0]) {
      array.push(left.shift())
    } else {
      array.push(right.shift())
    }
  }
  
  array = array.concat(left, right);
  return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
