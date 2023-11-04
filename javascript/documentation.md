# Javascript
- JavaScript fundamentals
   - [Data types](#Data-types-javascript)
   - Javascript Functions
   - Objects
   - Event
   - Strings
   - Arrays
   - For, For in, For Of, For Each, While
   - Iterating
   - Maps
   - JavaScript Errors
   - This
   - Arrow functions
   - Clases, Herencia y Polimorfismo
   - Modules
   - JavaScript JSON
   - JavaScript Reserved Words
- Asincronía
    - Callbacks: El concepto básico detrás de la asincronía en JavaScript.
    - Promesas: Un enfoque más moderno para manejar la asincronía.
    - async/await: La forma más nueva y legible de manejar operaciones asíncronas. 
- APIs Web
    - Fech
    - Local Storage
- Testing
    - Jest
    - Mocha
- ES6+ Características
    - **`let` y `const`**:
    - `let`: Introduce una declaración de variable con ámbito de bloque.
    - `const`: Para declaraciones de variables inmutables (no puedes reasignarles un valor).

    - **Funciones de Flecha (`=>`)**:
    - Proporciona una sintaxis más corta para funciones anónimas.
    - No tiene su propio valor de `this`, hereda el `this` del ámbito envolvente.

    - **Plantillas de Cadenas (Template Strings)**:
    - Uso de backticks (` `` `) para definir cadenas.
    - Permite interpolación de cadenas usando `${expression}`.
    - Soporte para cadenas multilínea.

    - **Desestructuración (Destructuring)**:
    - Extraer valores de arrays u objetos directamente en variables.
    
    - **Parámetros Rest y Spread**:
    - `...`: Permite representar un número indefinido de elementos como un array.

    - **Clases**:
    - Sintaxis clara para definir clases y herencia.

    - **Módulos**:
    - Uso de `export` e `import` para modularizar y estructurar el código.

    - **Promesas**:
    - Objeto que representa la terminación o el fracaso de una operación asíncrona.

    - **Funciones asíncronas (`async/await`)**:
    - Permite trabajar con promesas de una manera más limpia y legible.

    - **Nuevos Métodos y Objetos Globales**:
    - `Array`: Métodos como `find()`, `findIndex()`, `includes()`, y más.
    - `Object`: Métodos como `assign()`, `values()`, `entries()`.
    - `String`: Métodos como `startsWith()`, `endsWith()`, `includes()`, `repeat()`.
    - `Number`: Propiedades como `Number.EPSILON`, `Number.isInteger()`.
    - Nuevo objeto global `Symbol` para crear identificadores únicos.

    - **Iteradores y Generadores**:
    - Permiten crear secuencias personalizadas y controlar la ejecución de funciones.

    - **Proxy y Reflect**:
    - `Proxy`: Permite definir comportamientos personalizados para operaciones fundamentales.
    - `Reflect`: Proporciona métodos para operaciones de objetos.

    - **Nuevas estructuras de datos**:
    - `Map`, `Set`, `WeakMap`, y `WeakSet`.

    - **Parámetros y argumentos por defecto en funciones**:
    - Permite definir valores por defecto para los parámetros de las funciones.


## Data types javascript
JavaScript has 8 Datatypes
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

The Object Datatype
The object data type can contain:

1. An object
2. An array
3. A date

## Exercise Data types
# Ejercicio: Sistema de Tipos de Datos y Conversión
# Sistema de gestión de inventario con tipos de datos y conversión

## Objetivo
Desarrollar un sistema básico de gestión de inventario que utilice diversos tipos de datos en JavaScript y que implemente operaciones de conversión entre ellos.

## Instrucciones

### 1. Entrada de productos:    
   * **Nombre:** Pide al usuario ingresar el nombre de un producto.
   * **Cantidad:** Solicita la cantidad del producto en existencia.
   * **Precio:** Pregunta por el precio del producto.

### 2. Conversión de datos:
   * **Nombre:** Asegúrate de que el nombre del producto sea una cadena de texto.
   * **Cantidad:** Convierte la cantidad del producto en un número entero.
   * **Precio:** Convierte el precio del producto en un número con decimales (float).

### 3. Almacenamiento:
   * **Objeto:** Almacena la información del producto en un objeto.
   * **Inventario:** Añade el objeto a un array que representará el inventario.

### 4. Consultas:
   * **Búsqueda:** Permite al usuario realizar consultas por nombre de producto.
   * **Resultado:** Muestra la cantidad en existencia y el precio del producto solicitado.

### 5. Modificación:
   * **Edición:** Permite al usuario modificar la cantidad o el precio de un producto existente.

### 6. Reportes:
   * **Alerta:** Genera un reporte de los productos con baja existencia (por ejemplo, cantidad < 10).
   * **Valor Total:** Muestra el valor total del inventario (suma de todos los productos considerando su precio y cantidad).

### 7. Conversión avanzada:
   * **Exportación:** Implementa una funcionalidad para convertir todo el inventario a un formato JSON para su exportación.
   * **Importación:** Permite al usuario importar un inventario en formato JSON y convierte este texto al formato de array de objetos en el programa.

### 8. Tipos de dato adicionales:
   * **Validación:** Si el usuario introduce un valor no válido para cantidad o precio (por ejemplo, una cadena de texto que no se puede convertir
