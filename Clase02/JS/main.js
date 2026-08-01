
const cantMaterias = 3
//Pedimo nombre del alumno o Cer0
let alumno = prompt('Ingrese el nombre del alumno o 0 (cero) para salir. ')

//Generamos un while donde se ejecuta nuestra calcular de promedio hasta que el usuario desee salir
while (alumno != '0') {
  
  let notaTotal = 0
  let promedio = 0
  
  for(let i = 1; i<=cantMaterias;i++){
    notaTotal += parseInt(prompt('Ingrese el resulado del examen N'+i))
  }

  promedio = notaTotal/cantMaterias

  if(promedio>=8){
    console.log(`Felicidades ${alumno} promocionaste con ${promedio}`)
  }else if(promedio >= 6){
    console.log(`El alumno ${alumno} debe presentarse a rendir solo la teoria su promedio fue de ${promedio}`)
  }else if(promedio>=4){
    console.log(`El alumno ${alumno} no alcanzo el promedio deseado debe rendir completa la materia su promedio ${promedio}`)
  }else{
    console.log(`El alumno ${alumno} debe recursar la materia completa su promedio fue ${promedio}`)

  }
  //console.log(notaTotal)

  alumno = prompt('Ingrese el nombre del alumno o 0 (cero) para salir. ')
}