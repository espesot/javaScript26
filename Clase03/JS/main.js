//Cantidad de materias para el calculo del promedio
const cantidadExamenes = 3


let op = confirm('Ingresar al calcular de promedio')

// Funcion para calcular el acumulado de todas las notas
function acumularNota(cantExamen) {
  let total = 0
  for (let i = 1; i <= cantExamen; i++) {
    total += parseInt(prompt('Ingrese la nota del examen'))
  }
  return total
}

// Funcion FLECHA que calcula el promedio
const promedio = (a, b) => a/b

// Funcion que determina su proximo paso segun el promedio
function resultado(nota) {
  if (nota >= 8) {
    return 'Felicidades has promocionado'
  }
  if (nota >= 6) {
    return 'Deber rendir la teoria'
  }
  if (nota >= 4) {
    return 'Deber rendir la materia completa'
  }
  return 'Debes recursar'
}



while (op) {
  let totalnota = acumularNota(cantidadExamenes)
  let notaPromedio = promedio(totalnota,cantidadExamenes)
  let mensaje = resultado(notaPromedio)
  
  console.log(mensaje)
  op = confirm('desea continuar?')
}