
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
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        let nuevoID = productos.length + 1
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
        } else {
            addCarrito(el.id,el.nombre,cantidad||1,parseInt(el.precio))
          // addCarrito(el.id,el.nombre,parseInt(cantidad||1),el.precio)


        }
        // descStock(el.id)
        // if (el.stock == 0) {
        //   btnn.textContent = ''
        // } else {
        //   cardStock.textContent = `Stock disponible: ${el.stock}`
        // }
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


// pasar el AddCarrito a esta parte.... por el tema del render....
// y separar cada HTML con su JS para que no se superpongan..
// index.html y main por un lado y carrito.js con carrito.html  en la parte de los script