### CODERHOUSE

### Practica N 7
### Alumno: Spesot Enzo


### DOM y Eventos


>Tomando la entrega anterior se realizan varias modificaciones para eliminar por completo el uso del **prompt, alert y console.log**

El sistema cuenta de 3 partes:
- **Agregar un nuevo producto**
- **Busqueda por alguna palabra clave**
- **Mostrar Todos**

#### Agregar un neuvo producto
>Para agregar un nuevo producto debemos completar los datos y precionar el boton de agregar,
este boton llama al evento **btnAdd** que al hacerle click llama a la funcion **btnAgregar()**
esta funcion agrega una nueva instancia a array de **productos** y una vez agregado muestra en un nodo **p** el prodcuto agregado

>Ademas de agregar un nuevo producto llama a otra funcion **render()** y le pasa el array con todos los productos y genera una vista de todos los productos que tenemos cargados paso seguido el boton cambia de nombre a **Limpiar**

>Cuando el boton tiene como texto **Limpiar** al hacerle click no agrega ningun producto nuevo sino que solamente borra el contenido de los **input** y elimina el nodo **p**

#### Busqueda por palabra clave

>Este boton **Buscar** toma el valor del **input** y hace un filtro sobre la palabra que ingresamos, con el resultado llamaa a la funcion **render()** pasandole el resultado como parametro para que nos muestre los productos que arrojo la busqueda


#### Mostrar Todos
>Este boton llama a la funcion **render()** y le pasa el array **productos** como parametro y nos muestra toods los productods que tenemos guardado

#### render()
Esta funcion renderiza un array de objeto que se le pasa en diferentes momentos al renderizar muestra
- Nombre del producto
- Stock disponible
- Precio
- Categoria
- Boton de comprar

>[!note]
En caso de que el producto no cuente con **Stock disponible** aparecera una leyenda que dice
**Sin Stock** y el boton de comprar aparecera sin el nombre y al hacerle click no ejecutara ninguna funcion


