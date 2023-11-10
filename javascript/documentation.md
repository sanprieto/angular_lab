# Javascript
- JavaScript fundamentals
   - [Data types](#Data-types-javascript)
   - [Javascript Functions](#Functions-javascript)
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
## Ejercicio: Sistema de Tipos de Datos y Conversión

- Crear una función que devuelva el tipo de dato pasado por parámetro y que te diga las posible conversiones o valores que puede devolver.



# Functions javascript

A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).

En JavaScript, existen diversos tipos de funciones, cada una con características y usos específicos:

## 1. Funciones Declarativas (Function Declarations)

- Definidas con la palabra clave `function`.
- Ejemplo:
  ```javascript
  function miFuncion() {
    // Código aquí
  }

## Expresiones de Funciones (Function Expressions)

- Las funciones se definen dentro de una expresión.
- Pueden ser anónimas o nombradas.
- Ejemplo:
  ```javascript
  const miFuncion = function() {
    // Código aquí
  };
## Funciones Flecha (Arrow Functions)

- Introducidas en ES6, ofrecen una sintaxis más corta.
- No tienen su propio `this`, `arguments`, `super`, o `new.target`.
- Ejemplo:
  ```javascript
  const miFuncion = () => {
    // Código aquí
  };

## Funciones Generadoras (Generator Functions)

- Permiten definir un algoritmo iterativo pausando su ejecución.
- Utilizan `function*` para su definición y `yield` para pausar.
- Ejemplo:
  ```javascript
  function* generador() {
    yield 1;
    yield 2;
  }

### Ejemplo de Función Asíncrona en JavaScript

Este ejemplo muestra cómo crear y usar una función asíncrona para simular una operación que toma tiempo, como una solicitud de red o una consulta a una base de datos, utilizando `setTimeout`.

```javascript
// Simula una operación asíncrona, como una solicitud de red
function simularOperacionAsincrona() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Operación completada");
    }, 2000); // Espera 2 segundos
  });
}

// Función asíncrona que espera el resultado de la operación asincrónica
async function realizarOperacion() {
  console.log("Iniciando operación...");
  const resultado = await simularOperacionAsincrona();
  console.log(resultado); // Esto se ejecuta después de que la promesa se resuelve
  console.log("Operación finalizada.");
}

realizarOperacion();

```
## Funciones Anónimas en JavaScript

Las funciones anónimas son funciones que no tienen un nombre asignado. Se utilizan comúnmente en JavaScript por su versatilidad y concisión. A continuación se presentan dos ejemplos comunes de su uso.

### Ejemplo 1: Función Anónima Asignada a una Variable

Una función anónima puede ser asignada a una variable. Esto es útil para reutilizar la función en otras partes del código.

```javascript
//función anómima asignada a una variable
const saludo = function() {
  console.log('Hola, soy una función anónima.');
};
saludo(); 

//función anómima pasada por parámetro
setTimeout(function() {
  console.log('Mensaje después de 2 segundos');
}, 2000);

```

## Funciones IIFE (Immediately Invoked Function Expressions)

Las IIFE son una técnica en JavaScript para ejecutar funciones inmediatamente después de su definición. Son útiles para crear un ámbito privado y evitar contaminar el ámbito global.

### Ejemplo de IIFE

```javascript
(function() {
  const mensajePrivado = "Este es un mensaje privado";
  console.log(mensajePrivado);
})();

```

## Métodos de Objeto y Clase en JavaScript

JavaScript permite definir métodos que son funciones dentro de objetos y clases, facilitando la encapsulación y organización de la lógica relacionada con esos objetos o clases.

### Métodos de Objeto

Los métodos de objeto son funciones definidas dentro de un objeto. Son útiles para operaciones que están relacionadas con el objeto.

#### Ejemplo de Método de Objeto

```javascript
const persona = {
  nombre: 'Alice',
  saludar: function() {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  }
};

persona.saludar(); // Salida: Hola, mi nombre es Alice

```
## Funciones Constructoras

Las funciones constructoras en JavaScript son utilizadas para crear objetos específicos. Permiten definir propiedades y métodos para los objetos que se crearán.

### Ejemplo de Función Constructora

```javascript
function Persona(nombre) {
  this.nombre = nombre;
  this.saludar = function() {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  };
}

const persona1 = new Persona('Alice');
const persona2 = new Persona('Bob');

persona1.saludar(); // Salida: Hola, mi nombre es Alice
persona2.saludar(); // Salida: Hola, mi nombre es Bob
```

## Callbacks en JavaScript

Los callbacks son funciones que se pasan como argumentos a otras funciones y se ejecutan después de una operación o evento. Son una característica esencial en JavaScript, especialmente para manejar operaciones asíncronas.

### Ejemplo de Callback

```javascript
function procesarRespuesta(callback) {
  // Simulando una operación asíncrona, como obtener datos de una API
  setTimeout(() => {
    const datos = "Datos obtenidos";
    callback(datos);
  }, 2000);
}

procesarRespuesta((datos) => {
  console.log(`El callback se ha ejecutado: ${datos}`);
});

```

# Ejercicio de JavaScript: Sistema de Gestión de Tareas

Este ejercicio tiene como objetivo practicar diferentes tipos de funciones en JavaScript. Se centrará en la creación de un pequeño sistema de gestión de tareas que incorporará diversas funcionalidades y estilos de funciones.

## Objetivo

Desarrollar un sistema de gestión de tareas que permita:

1. **Agregar tareas** utilizando una función constructora.
2. **Mostrar tareas** a través de un método de objeto.
3. **Completar tareas de manera asíncrona** empleando funciones asíncronas y promesas.
4. **Registrar el progreso** mediante callbacks y funciones anónimas.
5. **Inicializar el sistema** con una IIFE (Immediately Invoked Function Expression).

## Detalles del Ejercicio

### 1. Función Constructora para Tareas

Crea una función constructora `Tarea` que permita instanciar tareas. Cada tarea debe tener un `nombre` y una propiedad `completada` que inicia en `false`.

### 2. Método de Objeto para Mostrar Tareas

Implementa un método dentro de un objeto que sea capaz de mostrar el estado actual de las tareas.

### 3. Funciones Asíncronas para Completar Tareas

Desarrolla una función asíncrona que simule el proceso de completar una tarea, cambiando su estado de `completada` a `true` después de un cierto retraso.

### 4. Uso de Callbacks y Funciones Anónimas para Registrar Progreso

Incluye callbacks en tu código que permitan registrar cuándo una tarea se inicia y cuándo se completa.

### 5. Inicialización con una IIFE

Utiliza una IIFE para iniciar el sistema, creando algunas tareas de ejemplo y mostrando su estado inicial.

## Resultado Esperado

Al final del ejercicio, deberías tener un sistema funcional de gestión de tareas que utilice distintos tipos de funciones en JavaScript, demostrando tu comprensión sobre cuándo y cómo usar cada una de ellas.
