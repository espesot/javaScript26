let productos = []
let valor = select()


function select() {
  let op = parseInt(prompt(`Elije una opción:
                    1) Buscar por nombre
                    2) Buscar por ID
                    3) Filtrar por categoria
                    4) Productos con mas stock
                    5) Total de stock en deposito
                    6) Mostrar el total del valor en deposito
                    0) Salir`))
  return op
}

class Producto {
  constructor(id, nombre, precio, categoria, stock) {
    this.id = id,
      this.nombre = nombre,
      this.precio = precio,
      this.categoria = categoria,
      this.stock = stock
  }
}

productos.push(new Producto('a01', 'Televisor de 55"', 150000, 'Tecno', 50))
productos.push(new Producto('a02', 'Aire Acondicionado F/C', 800000, 'Hogar', 30))
productos.push(new Producto('a03', 'Helader inverter', 900000, 'Electro', 20))
productos.push(new Producto('a05', 'Tostadora', 50000, 'Electro', 50))
productos.push(new Producto('a04', 'Lavarropa', 800000, 'Electro', 10))
productos.push(new Producto('a06', 'Pava Electrica', 70000, 'Hogar', 40))


function buscarPorNombre(nombre) {
  let resul = productos.find((el) => el.nombre === nombre)
  if (resul == undefined) {
    return 'No se encontro el producto buscado, Vuelva a intentar'
  } else {
    return resul
  }
}

function buscarPorID(id) {
  let resul = productos.find((el) => el.id === id)
  if (resul == undefined) {
    return 'No se encontro el producto buscado, Vuelva a intentar'
  } else {
    return resul
  }
}

function filtroCat(cat) {
  let result = productos.filter((el) => el.categoria == cat)
  return result
}

function masStock(cant){
  let result = productos.filter((el)=> el.stock >= cant)
  return result
}

function totalStock(){
  let result = productos.reduce((acc,el)=> acc +el.stock,0)
  return result
}


function total(){
  let tot = 0
  productos.forEach((el)=>{
    tot += (el.precio * el.stock)
  })
  return tot
}




while (valor != 0) {
  let data = ''
  let retorno = ''
  switch (valor) {
    case 1:
      data = prompt('Ingrese el nombre del producto que desea buscar')
      retorno = buscarPorNombre(data)
      console.log(retorno)
      break;
    case 2:
      data = prompt('Ingrese el ID del producto que desea buscar')
      retorno = buscarPorID(data)
      console.log(retorno)
      break;
    case 3:
      data = prompt('Ingrese una categoria para filtrar')
      retorno = filtroCat(data)
      if (retorno.length == 0) {
        console.log(`No existen productos de la categoria ${data}`)
      } else {
        console.table(retorno)
      }
      break;
    case 4:
      data = prompt('ingrese el stock de los productos que desee controlar')
      retorno = masStock(data)
      if (retorno.length == 0) {
        console.log(`No existen productos con esa cantidad de stock ${data}`)
      } else {
        console.table(retorno)
      }
      break;
    case 5:
      retorno = totalStock()
      console.log(`Existen ${retorno} productos en deposito `)
      break;
    case 6:
      retorno = total()
      console.log(`El valor total en el deposito es de ${retorno} `)
      break;

    default:

      break;
  }
  valor = select()
}
