### CODERHOUSE

### Practica N 10
### Alumno: Spesot Enzo


### API y Librerias


>Tomando la entrega anterior se realizan modificaciones para incluir API y librerias

#### Uso de fetch()
Para el uso del fetch se utilizo un archivo **data.json** de donde se extraen los productos almacenados y se los carga en el **localStorage** desde donde se trabaja y se utiliza como almacenamiento permanente.

ademas se utiliza para hacer una peticion a una **api** que es **https://dolarapi.com/v1/dolares**
de donde extramos la cotizacion de **Dolar blue compra** y se muestra en la parte superior.


#### Uso de Librerias
Para el uso de Librerias se decidio trabajar con **sweetAlert2** lo usamos principalmente cuando queremos agregar un nuevo producto. 
Al precionar el boton de **Agregar** aparece una alerta donde nos pide que confirmemos, rechacemos o cancelemos la operacion.
Dependiendo de nuestra respuesta ejecuta ciertas acciones.

Ademas si el usuario no ingresa todos los capos del nuevo producto aparece una alerta de **warning**