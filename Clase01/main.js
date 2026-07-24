const nombre = prompt('Ingrese el nombre del Cliente')
console.log('Bienvenido ' + nombre)

let cuenta
cuenta = parseFloat(prompt('Ingrese el total de la cuenta'))
let porcentaje = parseInt(prompt('Ingrese el porcentaje de propina que desea colaborar')) 

let abono = cuenta*(porcentaje/100)

alert('El Cliente '+ nombre + ' debe abonas $'+ abono + ' de propina')