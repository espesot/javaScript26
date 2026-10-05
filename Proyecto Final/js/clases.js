
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

async function getStorage() {
  try {
    let result = JSON.parse(localStorage.getItem('productos'))
    let productoMetodo = recargarMetodos(result)
    return productoMetodo

  } catch (error) {
    console.log('Ocurrio un error de conexion', error)
  } finally {
    console.log('Conexion Exitosa')
  }
}

function saveStorage(arr) {
  localStorage.setItem('productos', JSON.stringify(arr))

}
async function getCarrito() {
  try {
    let result = JSON.parse(localStorage.getItem('carro'))
    if (result === null) {
      return []
    } else {
      return result
    }
  } catch (error) {
    console.log(error)
  }
}

async function saveCarrito(arr) {
  localStorage.setItem('carro', JSON.stringify(arr))

}

