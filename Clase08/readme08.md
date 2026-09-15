### CODERHOUSE

### Practica N 8
### Alumno: Spesot Enzo


### Storage y Operadores Avanzados


>Tomando la entrega anterior se realizan varias modificaciones permitir que los datos queden guardados en el **localStorage**

El sistema cuenta de 3 partes:
- **Agregar un nuevo producto**
- **Busqueda por alguna palabra clave**
- **Mostrar Todos**

#### Agregar un neuvo producto
>Para agregar un nuevo producto debemos completar los datos y precionar el boton de agregar,
este boton llama al evento **btnAdd** que al hacerle click llama a la funcion **btnAgregar()**
esta funcion agrega una nueva instancia a array de **productos** y una vez agregado muestra en un nodo **p** el prodcuto agregado
>La funcion **btnAgregar()** llama a una nueva funcion que es **getStorage()**
cuya tarea es traer los productos que estan en el localStorage de esta manera tendermos la ultima verison de los productos una vez que realiza la guncion llama a la nueva funcion **saveStorage** que lo que hace es guardar en el **localStorage** la version con el producto agregado



>Ademas de agregar un nuevo producto llama a otra funcion **render()** y le pasa el array con todos los productos y genera una vista de todos los productos que tenemos cargados paso seguido el boton cambia de nombre a **Limpiar**

>Cuando el boton tiene como texto **Limpiar** al hacerle click no agrega ningun producto nuevo sino que solamente borra el contenido de los **input** y elimina el nodo **p**

#### Busqueda por palabra clave

>Este boton **Buscar** llama primero a la funcion **getStorage()** que ya se explico anteriormente y tomando el valor del **input** y hace un filtro sobre la palabra que ingresamos, con el resultado llama a la funcion **render()** pasandole el resultado como parametro para que nos muestre los productos que arrojo la busqueda


#### Mostrar Todos
>Este boton  hace una accion similiar al  boton anterior sin filtrar y luego llama a la funcion **render()** y le pasa el array **productos** como parametro y nos muestra toods los productods que tenemos guardado

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

### Boton Comprar dentro de Card
>Esta funcion genero una dificultad ya que si filtrabamos, luego descontabamos el stock y guardabamos un array filtrado perdiamos ciertos elementos.
**solucion**
>El boton de comprar pasa el valor del **id** del producto a una funcion que se llama **descStock()** esta funcion primero tomo el array completo que esta en el **localStorage** y con el metodo **findIndex()** busca el objeto que coincida con el id enviado.
Luego actualiza el stock y guarda el array en el localStorage.
y vuelve a renderizar el array o si filtramos rnderiza el array filtrado

