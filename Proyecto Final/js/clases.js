
class Producto {
  constructor(id, nombre, precio, categoria, stock) {
    this.id = id,
      this.nombre = nombre,
      this.precio = precio,
      this.categoria = categoria,
      this.stock = stock
  }
  venta() {
    this.stock >= 1 && (this.stock = this.stock - 1)
  }

}

class Carrito{
  constructor(id, idProducto, nombre, cantidad, precio){
    this.id = id,
    this.idProducto = idProducto,
    this.nombre = nombre,
    this.cantidad = cantidad,
    this.precio = precio
  }
}
