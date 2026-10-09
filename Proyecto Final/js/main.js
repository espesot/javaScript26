
let productos = []
// buscamos los productos que pueden o no estar en el localStorage
let prodStorage = JSON.parse(localStorage.getItem('productos'))

prodStorage === null ? cargaProductos() : (productos = prodStorage)

async function cargaProductos() {
  try {
    let response = await fetch('./data.json')
    productos = await response.json()

  } catch (error) {
    console.log('Hubo un error de conexion', error)
  }
  localStorage.setItem('productos', JSON.stringify(productos))
}


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
let cotizacion = document.querySelector('section')
let dls = 1500


async function apiDolar() {
  let dolarApi = await fetch('https://dolarapi.com/v1/dolares')
  let response = await dolarApi.json()

  setTimeout(() => {
    cotizacion.classList.remove('ocultar')
    cotizacion.querySelector('h3').textContent = `Cotizacion del dia : $${response[0].compra}`
  }, 1000)
}


//------------------------
// Descomentar
//apiDolar()



async function btnAgregar() {
  let nuevoID
  productos = await getStorage()
  if (nombre.value == '' || newPrecio.value == '' || newStock.value == '') {
    Swal.fire({
      title: "Atencion",
      text: "Quedaron campos incompletos",
      icon: "warning"
    });
    clean()
  } else {
    Swal.fire({
      title: "Desea Agregar este nuevo producto",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Guardar",
      denyButtonText: `No Guardar`
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(productos)
        productos.length == 0 ? nuevoID = 1 :
          nuevoID = (Math.max(...productos.map(producto => producto.id))) +1
        productos.push(new Producto(nuevoID, nombre.value, parseInt(newPrecio.value) || 10000, newCategoria.value || 'Generico', parseInt(newStock.value) || 2))
        saveStorage(productos)
        render(productos)
        Swal.fire("Saved!", "", "success")
        clean()
      }
      else if (result.isDenied) {
        clean()
        Swal.fire("No se guardo el producto", "", "info");
      }
    });

  }

}


function clean() {
  nombre.value = ''
  newPrecio.value = ''
  newCategoria.value = ''
  newStock.value = ''
}

function recargarMetodos(arry) {
  let result = []
  arry.forEach((el) => {
    result.push(new Producto(el.id, el.nombre, el.precio, el.categoria, el.stock))
  })
  return result
}

async function descStock(id) {
  let productosStock = await getStorage()
  let index = productosStock.findIndex(el => el.id == id)
  let newStock = productosStock[index].stock -= 1
  saveStorage(productosStock)
  if (busqueda.value != '') {
    let p = productosStock.filter(el => el.nombre.toLowerCase().includes(busqueda.value.toLowerCase()))
    render(p)
  } else {
    render(productosStock)
  }
}


async function render(arr) {
  contenedor.innerHTML = ''
  arr.forEach((el) => {
    let card = document.createElement('div')
    card.innerHTML = `
      <h3>${el.nombre}</h3>
      <p>$ ${el.precio}</p>
      <input max="${el.stock}" type="number" name="" id="">
      <h6>Stock disponible: ${el.stock}</h6>
      <button>Add Carrito</button>
      `
    // <button id="co">Comprar</button>
    let btnn = card.querySelector('button')
    let cardStock = card.querySelector('h6')
    if (el.stock == 0) {
      cardStock.textContent = 'Sin stock'
      btnn.textContent = ''
    } else {
      btnn.addEventListener('click', () => {
        let cantidad = card.querySelector('input').value
        if (cantidad > el.stock) {
          console.log('err')
          //swettAlert errror
          //Error por mayor cantidad que el stock
        } else {
          addCarrito(el.id, el.nombre, cantidad || 1, parseInt(el.precio))
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
btnBuscar.addEventListener('click', async () => {
  let productosBuscar = await getStorage()
  let result = productosBuscar.filter(el => el.nombre.toLowerCase().includes(busqueda.value.toLowerCase()))
  render(result)
})

btnTodos.addEventListener('click', async () => {
  busqueda.value = ''
  let productosBuscar = await getStorage()
  productos = productosBuscar
  render(productos)
})


async function addCarrito(idProducto, nombre, cantidad, precio) {
  let carrito = await getCarrito()
  
  carrito.length == 0?
    id = 1 :
    id = Math.max(...carrito.map(carr => carr.id)) + 1
  
  // console.log(i)
  console.log(id)
  carrito.push(new Carrito(id, idProducto, nombre, cantidad, precio))
  await saveCarrito(carrito)

}
