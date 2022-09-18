"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;

  - remove: elimina el último nodo de la lista y retorna su valor. 
  (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)

  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: 
  el parámetro puede ser un valor o un callback. 
    En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado
    En el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, 
    retorne true. 
 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro 
  un número par, busca un nodo cuyo valor sea un número par.
  
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.head = null; 
}

function Node(value) {
  this.value = value;
  this.next = null; 
}

LinkedList.prototype.add = function(value) {
  var nodo = new Node(value);
  var current = this.head;
  if (!current) { 
   this.head = nodo
    return;
  } 
  while (current.next) {
    current = current.next
  }
  current.next = nodo; 
  return nodo; 
}

LinkedList.prototype.remove = function() {
  var current = this.head;
  // si esta vacia...
  if (!current) return null; 
  // si tiene un solo nodo...
  if (!current.next) {
    this.head = null;
    return current.value
  }
  // si tiene mas de un nodo...
  // mientras tenga dos nodos adelante con .next
  // ejemplo (1 -> 2 -> 3 -> 4 - null) 3 no tiene dos nodos adelante
  // mientras que 1 y 2 si.
  // entonces convierto a null su nodo siguiente y lo saco de la lista. 
  while (current.next.next) { 
    current = current.next 
  }
  //guardo el nodo que voy a sacar
  var ultimoNodo = current.next
  current.next = null;
  return ultimoNodo.value
}

LinkedList.prototype.search = function(value) {
  var current = this.head;
  if (!current) return null;
  while(current) {
    // value es un callback
    if (typeof value === "function") {
      // la funcion que me pasan devuelve booleano,
      // si me devuelve true -> encontre el valor.
      // la debo ejecutar con el valor del nodo. 
      if (value(current.value)) {
        return current.value
      }
    }
    if (current.value === value) return current.value;
    current = current.next
  }
    return null
}

/*
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets 
(slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), 
donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). 

(Luego de haber pasado todos los tests, a modo de ejercicio adicional, 
pueden modificar un poco la clase para que reciba la cantidad de buckets 
por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:

  - hash: función hasheadora que determina en qué bucket se almacenará un dato. 
  Recibe un input alfabético, suma el código numérico de cada caracter del input 
  (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; 
  de esta manera determina la posición de la tabla en la que se almacenará el dato.

  - set: recibe el conjunto clave valor (como dos parámetros distintos), 
  hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.

  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.

  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, 
si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), 
se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];
}

HashTable.prototype.set = function(key, value) {
// si no es string devolver un error 
  if (typeof key !== 'string') throw new TypeError('Keys must be strings'); 
// tira un numero entre 0 y 34 en la posicion index
  var index = this.hash(key);
// si colisionan dos valores en un mismo bucket se crea un objeto
// ambos valores coexisten en el mismo bucket.
  if (!this.buckets[index]) {
    this.buckets[index] = {};
  }
  // guardo la key hasheada en el bucket
  // [{foo: bar1, ofo: bar2}]
  this.buckets[index][key] = value 
}

HashTable.prototype.get = function(key) {
  var hash = this.hash(key);
  return this.buckets[hash][key]
}

HashTable.prototype.hasKey = function(key) {
  var hash = this.hash(key);
  return this.buckets[hash].hasOwnProperty(key) // devuelte true si existe la propiedad "key"
}

HashTable.prototype.hash = function(key) {
  var codigo = 0;
  for (let i = 0; i < key.length; i++) {
    codigo += key.charCodeAt(i);
  }
  return codigo % this.numBuckets;
}














// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
