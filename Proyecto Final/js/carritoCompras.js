let carrito = []


let subTotal = document.querySelectorAll('section')[1]
let contenedorCarr = document.getElementById('contenedor-items')

carrito = getCarrito()

console.log(contenedorCarr)

// async function addCarrito(idProducto, nombre, cantidad, precio) {
//   let carrito = await getCarrito()
//   id = carrito.length + 1
//   carrito.push(new Carrito(id, idProducto, nombre, cantidad, precio))
//   // console.table(carrito)
//   await saveCarrito(carrito)
// }

// renderCarrito(carrito)

// async function getCarrito() {
//   try {
//     let result = JSON.parse(localStorage.getItem('carro'))
//     if (result === null) {
//       return []
//     } else {
//       return result
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }

// async function saveCarrito(arr) {
//   localStorage.setItem('carro', JSON.stringify(arr))

// }



async function main() {
  let arr = await getCarrito()
  console.log(arr)
  renderCarrito(arr)
  calcularTotal(arr)

}


async function calcularTotal(array) {
  let result = array.reduce((acc, el) => acc + (el.cantidad * el.precio), 0)
  subTotal.innerHTML = ''
  subTotal.innerHTML = `
    <h3>Subtotal: $ ${result} </h3>
    `
  }
  
  
  function renderCarrito(arr) {
    contenedorCarr.innerHTML = ''
    arr.forEach((el) => {
      let card = document.createElement('div')
      card.innerHTML = `
      <h3>${el.nombre}</h3>
      <p>$ ${el.precio}</p>
      <h6>Cantidad: ${el.cantidad}</h6>
      <button>Eliminar</button>
    `
    let btnDelete = card.querySelector('button')
    btnDelete.addEventListener('click',()=>{
      //Ver en chatGPT la mejor manera de generar un ID
      // Agregar para eliminar el articulo del carro...
      console.log(el.id)
    })
    contenedorCarr.append(card)
  })
}

main()