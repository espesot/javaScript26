
alumnos = ['Juan', 'Martin', 'Maria', 'Ana', 'Luis']
let valor = select()


function select() {
  let op = parseInt(prompt(`Elije una opción:
                    1) Agregar un alumno al INICIO de la lista.
                    2) Agregar un alumno al FINAL de la lista
                    3) Eliminar el último alumno
                    4) Buscar un alumno por nombre
                    5) Modificar un alumno
                    6) Mostrar todos los alumnos
                    0) Salir`))
  return op
}

function addStart(nombre) {
  alumnos.unshift(nombre)
}

function addEnd(nombre) {
  alumnos.push(nombre)
}

function search(nombre) {
  let alumno = alumnos.includes(nombre)
  let respuesta
  let indice
  if (alumno) {
    indice = alumnos.indexOf(nombre)
    respuesta = `El alumno ${nombre} tiene el indice ${indice} `
  } else {
    respuesta = 'No existe el alumno buscado'
  }
  return respuesta
}

function update() {
  let indice = parseInt(prompt(`Ingrese el incide que desea modificar entre 0 y ${alumnos.length - 1} `))
  if (alumnos[indice] == undefined) {
    alert('ERROR ingreso')
  } else {
    let nuevoNombre = prompt('Ingrese el nuevo nombre')
    alumnos.splice(indice, 1, nuevoNombre)
  }
}



function show() {
  for (const el of alumnos) {
    console.log(`Alumno: ${el}`)
  }

}


while (valor != 0) {
  let data = ''
  switch (valor) {
    case 1:
      data = prompt('Ingrese el nombre del alumno que desea agregar al INICIO de la lista')
      addStart(data)
      console.log(alumnos)
      break;
    case 2:
      data = prompt('Ingrese el nombre del alumno que desea agregar al FINAL de la lista')
      addEnd(data)
      console.log(alumnos)
      break;
    case 3:
      data = alumnos.pop()
      console.log(`Se ha eliminado el elemento: ${data}`)
      console.log(alumnos)
      break;
    case 4:
      data = prompt('Ingrese el nombre del alumno que desea BUSCAR')
      let result = search(data)
      console.log(result)
      break;
    case 5:
      update()
      console.log(alumnos)
      break;
    case 6:
      show()
      break;

    default:

      break;
  }
  valor = select()
}

