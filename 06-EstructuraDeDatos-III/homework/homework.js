"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, 
  según se indique por parámetro ("post-order", "pre-order", o "in-order"). 
  Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png 
  dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.size = function() {
  if (!this.left && !this.right) return 1;
  if (!this.right) return 1 + this.left.size();
  if (!this.left) return 1 + this.right.size();
  return 1 + this.right.size() + this.left.size();
}

BinarySearchTree.prototype.insert = function(value) {
  if (value > this.value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value)}
  } else {
    if (this.left === null) {
      this.left = new BinarySearchTree(value)
     } else {
      this.left.insert(value);
     }
  }
}

BinarySearchTree.prototype.contains = function(value) {
  if (value === this.value) return true;
  if (value > this.value) {
    if (this.right === null) return false;
      return this.right.contains(value)
  } else {
    if (this.left === null) return false;
      return this.left.contains(value)
  }
}


BinarySearchTree.prototype.depthFirstForEach = function(cb, order) {
  if (order === 'in-order' || !order) {
    this.left && this.left.depthFirstForEach(cb, order)
    cb(this.value)
    this.right && this.right.depthFirstForEach(cb, order)
  } else if (order === 'pre-order') {
    cb(this.value)
    this.left && this.left.depthFirstForEach(cb, order)
    this.right && this.right.depthFirstForEach(cb, order)
  } else {
    this.left && this.left.depthFirstForEach(cb, order)
    this.right && this.right.depthFirstForEach(cb, order)
    cb(this.value)
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, array) {
  if (!array) var array = [];

  cb(this.value)

  if (this.left) {
    array.push(this.left)
  }

  if (this.right) {
    array.push(this.right)
  }

  while (array.length) {
    array.shift().breadthFirstForEach(cb, array)
  }
}





// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
}

