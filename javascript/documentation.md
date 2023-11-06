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

# Conversiones de Tipos en JavaScript

En JavaScript, los valores de ciertos tipos de datos se pueden convertir o coercionar a otros tipos de datos. A continuación, se enumeran las conversiones más comunes que se pueden realizar con cada tipo:

## String

- **A Number**: 
  - Usando `Number(str)`, `+str` o `parseFloat(str)`. 
  - Si el string no es un número válido, devuelve `NaN`.
- **A Boolean**: 
  - Usando `Boolean(str)`. 
  - Un string vacío se convierte en `false`, cualquier otro string (incluyendo uno con solo espacios) se convierte en `true`.

## Number

- **A String**: 
  - Usando `String(num)` o `num.toString()`.
- **A Boolean**: 
  - Usando `Boolean(num)`. 
  - `0` y `NaN` se convierten en `false`, cualquier otro número se convierte en `true`.

## Boolean

- **A String**: 
  - Usando `String(bool)`.
- **A Number**: 
  - Usando `Number(bool)`. 
  - `true` se convierte en `1` y `false` se convierte en `0`.

## Object

- **A String**: 
  - Generalmente usando `String(obj)` o `obj.toString()`, pero la implementación exacta depende del objeto específico.
- **A Number**: 
  - Generalmente usando `Number(obj)`, pero la implementación exacta depende del objeto.

## Null

- **A String**: 
  - Usando `String(null)`, devuelve `'null'`.
- **A Number**: 
  - Usando `Number(null)`, devuelve `0`.
- **A Boolean**: 
  - Siempre se convierte en `false`.

## Undefined

- **A String**: 
  - Usando `String(undefined)`, devuelve `'undefined'`.
- **A Number**: 
  - Usando `Number(undefined)`, devuelve `NaN`.
- **A Boolean**: 
  - Siempre se convierte en `false`.

## Symbol

- **Nota**: No se puede convertir directamente a **String** o **Number** sin generar un error. Sin embargo, se puede acceder a su descripción usando la propiedad `.description`.

## BigInt

- **Nota**: No se puede convertir automáticamente a **Number** porque puede haber pérdida de precisión. Sin embargo, se puede hacer manualmente usando `Number(bigint)`, pero con precaución.
- **A String**: 
  - Usando `String(bigint)` o `bigint.toString()`.


## Exercise Data types
# Ejercicio: Sistema de Tipos de Datos y Conversión

# Sistema de Gestión y Conversión de Tipos de Datos

## Funcionalidades Esenciales

### Entrada de Datos
- El sistema debe permitir al usuario ingresar un dato para su análisis y conversión.

### Identificación de Tipo de Dato
- Automáticamente identificar el tipo de dato ingresado utilizando `typeof` o un método equivalente.

### Opciones de Conversión
- Presentar al usuario las posibles conversiones para el tipo de dato ingresado.

### Realización de la Conversión
- Ejecutar la conversión seleccionada por el usuario y mostrar el resultado.

### Manejo de Errores
- Proporcionar mensajes de error claros cuando el usuario intente una conversión no válida.

### Control de Flujo
- Utilizar estructuras condicionales (`if`, `else if`, `else`) para gestionar las conversiones y errores.

