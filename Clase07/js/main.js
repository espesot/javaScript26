let productos = []

class Producto {
  constructor(id, nombre, precio, categoria, stock) {
    this.id = id,
      this.nombre = nombre,
      this.precio = precio,
      this.categoria = categoria,
      this.stock = stock
  }
}

productos.push(new Producto(1, 'Televisor de 55"', 150000, 'Tecno', 50))
productos.push(new Producto(2, 'Aire Acondicionado F/C', 800000, 'Hogar', 30))
productos.push(new Producto(3, 'Helader inverter', 900000, 'Electro', 20))
productos.push(new Producto(5, 'Tostadora', 50000, 'Electro', 50))
productos.push(new Producto(4, 'Lavarropa', 800000, 'Electro', 10))
productos.push(new Producto(6, 'Pava Electrica', 70000, 'Hogar', 40))

let btnAdd = document.getElementById('add')
let nombre = document.querySelector('#name')
let newPrecio = document.querySelector('#price')
let newCategoria = document.querySelector('#category')
let newStock = document.querySelector('#stock')
let divs = document.querySelectorAll('div')


//Ver de agregar todo lo que esta en el btn en una funcion
btnAdd.addEventListener('click', () => {
  let p = document.createElement('h3')
  if (btnAdd.textContent == 'Agregar') {
    let nuevoID = productos.length + 1
    productos.push(new Producto(nuevoID, nombre.value, parseInt(newPrecio.value), newCategoria.value, parseInt(newStock.value)))

    p.textContent = `Se guardo un nuevo producto ${nombre.value}`
    btnAdd.textContent = 'Limpiar'

    divs[0].appendChild(p)
  } else {
    btnAdd.textContent = 'Agregar'
    nombre.value = ''
    newPrecio.value = ''
    newCategoria.value = ''
    newStock.value = ''
    divs[0].lastElementChild.remove()
  }
})

