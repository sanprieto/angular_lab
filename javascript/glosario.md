# Javascript fundamentos

1. **¿Qué es JavaScript?**  
   JavaScript es un lenguaje de programación interpretado, de tipado débil, que se ejecuta principalmente en el lado del cliente dentro de navegadores web. Es esencial para desarrollar páginas web interactivas y aplicaciones web modernas.

2. **¿Cuál es la diferencia entre var, let y const?**  
   `var` declara variables con un ámbito de función, mientras `let` y `const` tienen un ámbito de bloque. `let` permite cambiar el valor de la variable, mientras que `const` se usa para declarar constantes cuyo valor no debe cambiar.

3. **¿Qué es el hoisting en JavaScript?**  
   El hoisting es un comportamiento de JavaScript donde las declaraciones de variables y funciones son movidas al inicio de su contexto de ejecución, ya sea del script o de una función.

4. **¿Qué son los tipos de datos en JavaScript?**  
   JavaScript tiene varios tipos de datos, incluyendo primitivos como String, Number, Boolean, undefined, null, BigInt y Symbol, y objetos, que son colecciones de propiedades.

5. **¿Qué es un closure en JavaScript?**  
   Un closure es una función que recuerda el entorno en el que fue creada. Esto permite acceder a variables externas a la función, manteniendo su estado entre múltiples llamadas.

6. **¿Cuál es la diferencia entre las funciones declarativas y las expresiones de función?**  
   Las funciones declarativas se nombran y se elevan durante la interpretación del código, permitiendo su uso antes de ser definidas. Las expresiones de función son anónimas y no se elevan.

7. **¿Cómo funciona this en JavaScript?**  
   En JavaScript, `this` se refiere al contexto en el que se invoca una función. Su valor cambia según cómo se llama a la función: en métodos de objetos, en funciones globales o con `new`.

8. **¿Qué son las Promesas y cómo las usas?**  
   Las Promesas en JavaScript representan una operación que aún no se ha completado, pero que se espera que lo haga en el futuro. Permiten escribir código asíncrono de forma más manejable.

9. **¿Qué es async/await y cómo mejora el trabajo con operaciones asíncronas?**  
   `async/await` es una forma de manejar operaciones asíncronas en JavaScript. Permite escribir código asíncrono que parece sincrónico, mejorando la legibilidad y facilitando la gestión de errores.

10. **¿Qué es el DOM en JavaScript?**  
    DOM (Document Object Model) es una representación estructurada del contenido de una página web. JavaScript lo utiliza para interactuar y manipular el contenido y la estructura de una página.

11. **¿Cómo agregas o eliminas un elemento del DOM usando JavaScript?**  
    Para agregar elementos al DOM, se pueden usar métodos como `appendChild` o `insertBefore`. Para eliminar, se usa `removeChild` o `remove` en el elemento padre.

12. **¿Qué es la delegación de eventos y por qué es útil?**  
    La delegación de eventos es una técnica para manejar eventos en múltiples elementos con un único manejador. Es útil para optimizar la memoria y manejar eventos en elementos dinámicos.

13. **¿Qué son los patrones de diseño en JavaScript y podrías mencionar alguno?**  
    Los patrones de diseño en JavaScript son soluciones reutilizables para problemas comunes de programación. Ejemplos incluyen el patrón Módulo, Constructor, Singleton y Observador.

14. **¿Qué son las transpilaciones y polifills en JavaScript?**  
    Las transpilaciones son el proceso de convertir código JavaScript moderno a versiones más antiguas para compatibilidad. Los polifills son fragmentos de código que implementan características modernas en navegadores antiguos.

15. **¿Cuál es tu enfoque para depurar código JavaScript?**  
    Para depurar JavaScript, utilizo herramientas como la consola del navegador, puntos de interrupción, y la inspección del DOM. También aplico técnicas como el logging y la revisión de código.

    Menciona herramientas como la consola del navegador, puntos de interrupción, y la inspección del DOM.

#  Desarrollo Frontend en Angular

## Conocimientos Generales de Frontend
1. **¿Qué es el DOM y cómo interactúa con JavaScript?**

   El DOM (Document Object Model) es una representación en forma de árbol de la estructura de un documento HTML. JavaScript interactúa con el DOM para manipular el contenido, la estructura y el estilo de las páginas web, permitiendo la creación de sitios web dinámicos.

2. **Explique el modelo de caja en CSS.**

   El modelo de caja en CSS describe cómo se estructuran los elementos HTML en términos de márgenes (margin), bordes (border), relleno (padding) y el contenido (content). Cada elemento se trata como una caja rectangular en la página, y este modelo determina cómo se distribuyen y alinean estos elementos.

3. **¿Cómo aseguras la responsividad de tu diseño web?**

   La responsividad se asegura utilizando diseños flexibles, unidades relativas (como porcentajes o em), media queries para aplicar estilos según el tamaño de la pantalla, y frameworks de CSS como Bootstrap. También es importante probar el diseño en múltiples dispositivos y resoluciones.

4. **¿Qué son las Progressive Web Apps (PWAs) y cómo se benefician de ellas?**

   Las Progressive Web Apps son aplicaciones web que ofrecen una experiencia similar a las aplicaciones nativas. Utilizan tecnologías web modernas para ser confiables (funcionan offline), rápidas y atractivas. Las PWAs pueden ser instaladas en dispositivos, enviar notificaciones push y acceder a ciertas características del hardware.

5. **Explique cómo funciona el modelo de eventos en JavaScript.**

   El modelo de eventos en JavaScript permite a los elementos HTML manejar eventos como clicks, teclado, ratón, etc. Los eventos se pueden escuchar y manejar mediante funciones. Este modelo permite la interactividad en las páginas web, donde los usuarios pueden interactuar con los elementos de la página y desencadenar acciones.


## Angular
1. **¿Qué es Angular y cuáles son sus ventajas sobre otros frameworks?**

   Angular es un framework de desarrollo para construir aplicaciones web de una sola página (SPA). Ofrece un enfoque basado en componentes, un potente sistema de enrutamiento, inyección de dependencias, y una integración robusta con TypeScript. Comparado con otros frameworks, Angular es conocido por su solidez y por ser una solución integral que incluye todo lo necesario para construir aplicaciones grandes y escalables.

2. **Explique el concepto de data binding en Angular.**

   El data binding en Angular es un mecanismo para sincronizar datos entre el modelo (lógica de negocio) y la vista (interfaz de usuario). Hay varios tipos: "Interpolation" ({{ }}) para mostrar datos, "Property Binding" para vincular propiedades de elementos HTML a datos del componente, "Event Binding" para responder a eventos del usuario en la vista, y "Two-way Binding" (ngModel) que combina property y event binding para una sincronización bidireccional.

3. **¿Qué son los componentes en Angular y cómo se comunican entre sí?**

   Los componentes en Angular son bloques fundamentales de la aplicación y encapsulan datos, lógica y la vista. Cada componente tiene su HTML, CSS y TypeScript asociados. Los componentes se comunican entre sí principalmente a través de "Input" y "Output" properties, donde un componente padre envía datos a un componente hijo (Input) y el hijo puede enviar datos de vuelta al padre (Output) a través de eventos.

4. **¿Cómo implementarías un servicio en Angular y para qué se utiliza?**

   Un servicio es una clase con un propósito específico y bien definido. La idea principal de un servicio es encapsular lógicas de negocio, operaciones o funcionalidades comunes y hacerlas accesibles a diferentes componentes dentro de una aplicación. Esto promueve la reutilización de código, la separación de preocupaciones y facilita el mantenimiento y las pruebas unitarias.

   **Funcionamiento y Propósito de un Servicio en Angular:**

   1. Encapsulación de Lógica:

      Un servicio puede contener métodos para realizar ciertas tareas, como interactuar con una base de datos, realizar cálculos complejos, o manejar operaciones HTTP.
      Al separar esta lógica de los componentes, estos últimos se mantienen enfocados en la interacción con la vista (UI).
   2. Reutilización de Código:

      Al tener una lógica común en un servicio, se puede inyectar y utilizar este servicio en varios componentes, evitando la duplicidad de código.
      Inyección de Dependencias:

      Angular utiliza un sistema de inyección de dependencias para proporcionar instancias de servicios a componentes y otros servicios.
      Un servicio se define como un provider en un módulo de Angular o en un componente, y Angular se encarga de crear y manejar las instancias de estos servicios.
   2. Singleton y Alcance de Instancias:

      Por defecto, un servicio es un singleton en Angular, lo que significa que una vez creado, la misma instancia del servicio se comparte en toda la aplicación.
      Sin embargo, el alcance de un servicio puede configurarse para ser específico de un módulo o componente, creando así múltiples instancias si es necesario.
   2. Pruebas y Mantenimiento:

      Los servicios facilitan las pruebas unitarias ya que se pueden probar por separado de los componentes.
      La separación de lógica también simplifica el mantenimiento del código, ya que los cambios en la lógica del servicio no requieren cambios en los componentes que lo utilizan.
5. **Explique el sistema de inyección de dependencias en Angular.**

   La inyección de dependencias en Angular es un patrón de diseño en el que un objeto (como un servicio) proporciona las dependencias de otro objeto. Angular tiene su propio sistema de inyección de dependencias que gestiona la creación y entrega de dependencias (como servicios) a clases que las necesitan (como componentes). Esto aumenta la modularidad y la flexibilidad del código.


## Preguntas Técnicas y de Código
   1. ## ¿Cómo crearías una directiva personalizada en Angular?
      ```typescript
      import { Directive, ElementRef, Input } from '@angular/core';

         @Directive({
         selector: '[appCambiarColor]'
         })
         export class CambiarColorDirective {
         @Input('appCambiarColor') color: string;

         constructor(private el: ElementRef) {
         }

         ngOnInit() {
            this.el.nativeElement.style.color = this.color || 'black';
         }
      }
      ```
         ```html
      <p appCambiarColor="blue">Este texto será de color azul.</p>

      ```
   1. ## Explique cómo funcionan las rutas en Angular.


      En Angular, las rutas permiten navegar entre diferentes vistas o componentes dentro de una aplicación de una sola página (SPA). El sistema de enrutamiento de Angular es muy potente y flexible, proporcionando una forma de cargar diferentes componentes en función de la URL del navegador. A continuación se explica cómo funciona este sistema:

      ## Componentes Clave del Enrutamiento en Angular:

         1. **`RouterModule`:**
            - Angular proporciona el `RouterModule` que se utiliza para configurar y manejar las rutas.
            - Este módulo se importa en el módulo principal de la aplicación (usualmente `AppModule`) o en módulos de funcionalidades.

         2. **Configuración de Rutas:**
            - Las rutas se definen como un array de objetos `Route`, donde cada objeto configura una ruta específica.
            - Cada `Route` asocia una URL (o patrón de URL) con un componente que se debe mostrar cuando se navega a esa URL.

         3. **`<router-outlet>`:**
            - Es un componente de Angular que actúa como un marcador de posición, donde se cargan los componentes de las rutas.
            - Se coloca generalmente en el archivo de plantilla del componente principal (`app.component.html`).

         4. **`RouterLink` y `RouterLinkActive`:**
            - Directivas que se utilizan en plantillas para crear enlaces de navegación.
            - `RouterLinkActive` permite aplicar una clase CSS a un enlace cuando su ruta está activa.

         5. **Servicio `Router`:**
            - Un servicio que permite navegar entre rutas de manera programática desde los componentes.

         ## Ejemplo Básico de Configuración de Rutas:

            ```typescript
            import { NgModule } from '@angular/core';
            import { RouterModule, Routes } from '@angular/router';
            import { HomeComponent } from './home/home.component';
            import { AboutComponent } from './about/about.component';

            const routes: Routes = [
            { path: 'home', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: '', redirectTo: '/home', pathMatch: 'full' } // Redirige a 'home' si la ruta es vacía
            ];

            @NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
            })
            export class AppRoutingModule { }

   1. ## ¿Cómo manejarías el estado en una aplicación Angular?
      En Angular, el manejo del estado se puede realizar de varias maneras. Una de las formas más comunes es utilizando el servicio ngrx/store, que implementa un patrón de administración de estado basado en la arquitectura Redux. Con ngrx/store, puedes crear un store centralizado donde se almacena el estado de la aplicación y luego utilizar acciones y reducers para actualizar y acceder a ese estado de manera predecible. Esto facilita la gestión del estado en aplicaciones grandes y complejas.
   1. ## ¿Cómo optimizarías el rendimiento de una aplicación Angular?
   Para optimizar el rendimiento de una aplicación Angular, se pueden seguir varias estrategias:

   Lazy Loading: Divide la aplicación en módulos y carga los módulos de forma perezosa, es decir, solo cuando se necesitan. Esto reduce el tiempo de carga inicial.

   AOT Compilation: Utiliza la compilación Ahead-of-Time (AOT) en lugar de la compilación Just-in-Time (JIT) para mejorar el tiempo de carga y el rendimiento general.

   Change Detection Strategy: Utiliza la estrategia de detección de cambios OnPush en los componentes para minimizar las comprobaciones de cambios innecesarias.

   Optimización de imágenes y recursos: Comprime y optimiza imágenes y otros recursos para reducir el tamaño de descarga de la aplicación.

   Minimiza las solicitudes HTTP: Reduce el número de solicitudes HTTP combinando archivos, utilizando caché y aplicando técnicas de carga diferida.
   1. ## Demuestre cómo usaría observables y RxJS en Angular.

## Preguntas de Pruebas y Debugging
16. ¿Cómo realizas pruebas en tus aplicaciones Angular?
17. Explique cómo usaría herramientas como Jasmine o Karma para pruebas unitarias.
18. ¿Cómo depuras una aplicación Angular?

## Preguntas de Experiencia y Proyecto
19. Describa un proyecto desafiante que haya realizado con Angular y cómo lo superó.
20. ¿Cómo maneja el versionado y la colaboración en proyectos Angular?

## Preguntas de Mejores Prácticas y Patrones de Diseño
21. ¿Cuáles son algunas mejores prácticas al desarrollar en Angular?
22. ¿Puede dar ejemplos de patrones de diseño que haya utilizado en Angular?

## Preguntas de Actualizaciones y Tendencias
23. ¿Está familiarizado con las últimas actualizaciones en Angular? ¿Cuáles son?
24. ¿Cómo se mantiene actualizado con las nuevas tendencias en desarrollo frontend?
