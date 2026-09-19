### CODERHOUSE

### Practica N 9
### Alumno: Spesot Enzo


### Asincronismo y Promesas


>Tomando la entrega anterior se realizan varias modificaciones permitir generar asincronismo y ademas hacer una **conexion segura**

Se crea un nuevo componente que esta oculto y con un **setTimeOut()** luego de **1 seg** aparece y muestra la cotizacion del dolar ficticio.

### Conexion con localStorage
>Como la conexion con el localStorge es una tarea sensible se creo una funcion **asincrona** y utilizando un **try catch** en caso de que falle se camptura y se muestra el error
con el **finally()** lo que haces es mostrar un mensaje diciendo que la conexion fue exitosa.

>Al llamar a las funciones usamos el **await** para que sea una tarea asincrona.

con estos cambios hacemos que todos sea asincrono y ademas en caso de ocurrir un error podamos capturarlo y que no detenga el programa.
