class Producto{
  constructor(id,nombre,precio,categoria,stock){
    this.id = id,
    this.nombre = nombre,
    this.precio = precio,
    this.categoria = categoria,
    this.stock = stock
  }

  updateStock(cantidad){
    let oldStock = this.stock
    this.stock = oldStock + cantidad
    console.log(`El nuevo stock de ${this.nombre} es de ${this.stock} unidades`)
  }

  descuento(porcentaje){
    let precioActual = this.precio
    let precioFinal = precioActual -(precioActual*(porcentaje/100))
    return `El Precio final de ${this.nombre} es de ${precioFinal}` 
  }


}

const tv = new Producto('a01','Televisor de 55"',150000,'Tecno',50)
const aireAcond = new Producto('a02','Aire Acondicionado F/C',800000,'Hogar',30)
const heladera = new Producto('a03','Helader inverter',900000,'Electro',20) 


// Modificamos el stock
tv.updateStock(-5)
aireAcond.updateStock(5)
heladera.updateStock(-10)

// Obtenemos el precion con descuento
let tvDescuento = tv.descuento(10)
console.log(tvDescuento)

let aireDescunto = aireAcond.descuento(5)
console.log(aireDescunto)

let helaDescu = heladera.descuento(20)
console.log(helaDescu)

