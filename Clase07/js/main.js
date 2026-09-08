let productos = []

class Producto {
  constructor(id, nombre, precio, categoria, stock) {
    this.id = id,
      this.nombre = nombre,
      this.precio = precio,
      this.categoria = categoria,
      this.stock = stock
  }
  venta() {
    if (this.stock >= 1) {
      this.stock = this.stock - 1
    }
  }
}

productos.push(new Producto(1, 'Televisor de 55"', 150000, 'Tecno', 3))
productos.push(new Producto(2, 'Televisor de 60"', 200000, 'Tecno', 0))
productos.push(new Producto(3, 'Televisor de 75"', 250000, 'Tecno', 4))
productos.push(new Producto(4, 'Televisor de 80"', 300000, 'Tecno', 10))
productos.push(new Producto(5, 'Aire Acondicionado F/C 3000 F', 800000, 'Hogar', 3))
productos.push(new Producto(6, 'Aire Acondicionado F/C 4500 F', 800000, 'Hogar', 3))
productos.push(new Producto(7, 'Aire Acondicionado F/C 3000 inverter', 800000, 'Hogar', 2))
productos.push(new Producto(8, 'Aire Acondicionado F/C 4500 inverter', 800000, 'Hogar', 0))
productos.push(new Producto(9, 'Aire Acondicionado Ventana 3000 F', 800000, 'Hogar', 1))
productos.push(new Producto(10, 'Aire Acondicionado Ventana 4500 F', 800000, 'Hogar', 5))
productos.push(new Producto(11, 'Helader inverter', 900000, 'Electro', 2))
productos.push(new Producto(12, 'Tostadora', 50000, 'Electro', 0))
productos.push(new Producto(13, 'Lavarropa', 800000, 'Electro', 1))
productos.push(new Producto(14, 'Pava Electrica', 70000, 'Hogar', 2))

let btnAdd = document.getElementById('add')
let nombre = document.querySelector('#name')
let newPrecio = document.querySelector('#price')
let newCategoria = document.querySelector('#category')
let newStock = document.querySelector('#stock')
let divs = document.querySelectorAll('div')
let busqueda = document.getElementById('busqueda')
let btnBuscar = document.getElementById('filtrar')
let contenedor = document.getElementById('contenedor-items')
let btnTodos = document.getElementById('all')

function btnAgregar() {
  let p = document.createElement('h3')
  if (btnAdd.textContent == 'Agregar') {
    let nuevoID = productos.length + 1
    productos.push(new Producto(nuevoID, nombre.value, parseInt(newPrecio.value), newCategoria.value, parseInt(newStock.value)))

    p.textContent = `Se guardo un nuevo producto ${nombre.value}`
    btnAdd.textContent = 'Limpiar'

    divs[0].appendChild(p)
    render(productos)
  } else {
    btnAdd.textContent = 'Agregar'
    nombre.value = ''
    newPrecio.value = ''
    newCategoria.value = ''
    newStock.value = ''
    divs[0].lastElementChild.remove()
  }
}

function render(arr) {
  contenedor.innerHTML = ''
  arr.forEach((el) => {
    let card = document.createElement('div')
    card.innerHTML = `
      <h3>${el.nombre}</h3>
      <p>$ ${el.precio}</p>
      <h6>Stock disponible: ${el.stock}</h6>
      <button id="co">Comprar</button>
      `
    let btnn = card.querySelector('button')
    let cardStock = card.querySelector('h6')
    if (el.stock == 0) {
      cardStock.textContent = 'Sin stock'
          btnn.textContent = ''
    } else {
      btnn.addEventListener('click', () => {
        el.venta()
        if (el.stock == 0) {
          cardStock.textContent = 'Sin stock'
          btnn.textContent = ''
        } else {
          cardStock.textContent = `Stock disponible ${el.stock}`
        }
      })
    }



    contenedor.append(card)
  })
}


// Boton para agregar un nuevo producto
btnAdd.addEventListener('click', btnAgregar

)

// boton para buscar ciertos productos por nombre
btnBuscar.addEventListener('click', () => {
  let result = productos.filter(el => el.nombre.toLowerCase().includes(busqueda.value.toLowerCase()))
  render(result)
})

btnTodos.addEventListener('click', () => {
  render(productos)
})
