# VueJs
02-BASE-VUE

# Seccion 03 - Introducción a Vue.js
v-on Eschucar un evento
Ejemplo:
<input type="text" v-model="sms" v-on:keypress="addFrases">


Vue tiene varios modificadores de eventos
https://vuejs.org/guide/essentials/event-handling.html#event-modifiers

# Seccion 04 - Vue CLI - Primera aplicación real.

En esta sección comenzaremos a trabajar con el Vue CLI (Command Line Interface)

Escirbimos: vue+enter y crea la estructura basica de un componente. 

Component option

# Data

1 data -> es una propiedad se utiliza para almacenar y manejar los datos que se utilizan en una aplicación.

2 props -> se utiliza para pasar datos de un componente padre a un componente hijo.

3 methods -> se utiliza para definir métodos que se pueden llamar desde la plantilla o desde otras partes de la instancia de Vue.

4 computed -> son propiedades/metodos calculadas que se actualizan automáticamente en función de los cambios en los datos. 





5 - Props y methods -> los methods son funciones que se ejecutan explicitamente cuando se llaman, mientras que los computed son propiedades calculadas que se actualizan automáticamente en función de los cambios en los datos.

1- data 

En Vue.js, "data" es una propiedad especial que se utiliza para almacenar y manejar los datos que se utilizan en una aplicación. La data se define como un objeto JavaScript y se vincula a la instancia de Vue mediante la propiedad "data". Los datos contenidos en la propiedad "data" son accesibles desde cualquier parte de la instancia de Vue, incluyendo plantillas, métodos y computadas.

Por ejemplo, si se tiene un objeto de datos como el siguiente:

data: {
  message: "Hello World!"
}

Entonces se podria utilizar en la plantilla de vue de la siguiente manera:

<template>
  <div>{{ message }}</div>
</template>
Los datos en Vue son reactivos, esto significa que cuando se actualizan los datos, la vista se actualiza automáticamente para reflejar los cambios. También se puede utilizar el método "Vue.set()" para agregar nuevas propiedades a la data y que éstas sean reactivas.

2 - props
Es una característica que se utiliza para pasar datos de un componente padre a un componente hijo. Los componentes en Vue son componentes reutilizables y encapsulados que se pueden utilizar para construir una aplicación. Los props son una forma de pasar datos desde un componente padre a un componente hijo, permitiendo que el componente hijo acceda a esos datos y los utilice.

Por ejemplo, si un componente padre tiene el siguiente código:

<template>
  <div>
    <child-component v-bind:message="parentMessage"></child-component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      parentMessage: "Hello from parent!"
    }
  },
  components: {
    'child-component': ChildComponent
  }
}
</script>
Entonces el componente hijo podria acceder a ese mensaje mediante el uso de una prop:

<template>
  <div>{{ message }}</div>
</template>

<script>
export default {
  props: ['message'],
}
</script>
En este ejemplo, el componente padre está pasando el valor de "parentMessage" al componente hijo mediante el uso de la prop "message" y el componente hijo está recibiendo ese valor y lo muestra en su plantilla.

En resumen, las props son una forma de pasar datos entre componentes en Vue.js. El componente padre define la propiedad y pasa los datos a través de ella, mientras que el componente hijo recibe y utiliza esos datos. Ademas, las props son reactivas, es decir, si el componente padre actualiza el valor de la prop, el componente hijo tambien se actualizará automáticamente.

3 -methods

En Vue.js, "methods" es una característica que se utiliza para definir métodos que se pueden llamar desde la plantilla o desde otras partes de la instancia de Vue. Los métodos son funciones JavaScript que se definen en la instancia de Vue y que se pueden utilizar para realizar tareas específicas, como actualizar los datos, realizar cálculos, o ejecutar cualquier otra lógica de negocio necesaria.

Por ejemplo, si se quiere tener un boton que al ser presionado se actualice un mensaje en pantalla:

<template>
  <div>
    <button @click="updateMessage">Click me</button>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello World!"
    }
  },
  methods: {
    updateMessage() {
      this.message = "The message has been updated"
    }
  }
}
</script>
En este ejemplo, la función "updateMessage" se esta llamando desde la plantilla mediante el uso de la directiva "@click", cuando se hace click en el boton, se ejecuta la función y actualiza el valor del mensaje.

En resumen, los methods en Vue.js es una característica que se utiliza para definir métodos que se pueden llamar desde la plantilla o desde otras partes de la instancia de Vue. Los métodos son funciones JavaScript que se utilizan para realizar tareas específicas, como actualizar los datos, realizar cálculos, o ejecutar cualquier otra lógica de negocio necesaria.



4 - Computed

En Vue.js, "computed" es una característica que se utiliza para crear propiedades calculadas que se actualizan automáticamente en función de los cambios en los datos. A diferencia de las propiedades "data", las propiedades calculadas son funciones que devuelven un valor y son accesibles desde la plantilla de la misma manera que las propiedades de los datos.

Por ejemplo, si se tiene una propiedad "firstName" y "lastName" en los datos, se podría crear una propiedad calculada "fullName" que combina ambos nombres:


<template>
  <div>{{ fullName }}</div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "John",
      lastName: "Doe"
    }
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    }
  }
}
</script>
En este ejemplo, la propiedad "fullName" se está calculando en tiempo real a partir de las propiedades "firstName" y "lastName" y se puede utilizar en la plantilla de la misma manera que cualquier otra propiedad de los datos. Si se actualiza "firstName" o "lastName", la propiedad "fullName" también se actualizará automáticamente.

En resumen, el computed es una característica de Vue.js que se utiliza para crear propiedades calculadas que se actualizan automáticamente en función de los cambios en los datos. Estas propiedades son accesibles desde la plantilla de la misma manera que las propiedades de los datos y son reactivas, es decir, si se actualizan las propiedades utilizadas para calcularlas, también se actualizarán automáticamente.


En Vue.js, la principal diferencia entre "methods" y "computed" es su comportamiento y cómo se utilizan.

Los "methods" son funciones JavaScript que se utilizan para realizar tareas específicas, como actualizar los datos, realizar cálculos, o ejecutar cualquier otra lógica de negocio necesaria. Los methods son invocados explícitamente cuando se necesita ejecutar una acción, ya sea mediante un evento o una llamada desde otra parte de la aplicación.

Los "computed" son propiedades calculadas que se actualizan automáticamente en función de los cambios en los datos. A diferencia de los methods, las propiedades calculadas son accesibles desde la plantilla de la misma manera que las propiedades de los datos. Las propiedades calculadas son reactivas, es decir, si se actualizan las propiedades utilizadas para calcularlas, también se actualizarán automáticamente.

En resumen, los methods son funciones que se ejecutan explicitamente cuando se llaman, mientras que los computed son propiedades calculadas que se actualizan automáticamente en función de los cambios en los datos. Los computed son útiles para crear propiedades que se calculan a partir de otras propiedades, permitiendo una mejor organización y legibilidad del código, mientras que los methods son útiles para realizar acciones o tareas específicas que requieren una acción del usuario o un evento específico.

# Seccion 05 - Vue CLI - Primera aplicación real.

# Option API (Vue 2)

La Options API es el modo tradicional de escribir componentes en Vue.js. Básicamente, se define un objeto con diferentes opciones como data, methods, computed, etc. y se lo pasa al constructor de Vue.

Por ejemplo:

Vue.component('my-component', {
  data: function () {
    return {
      message: 'Hello, Vue.js!'
    }
  },
  template: '<p>{{ message }}</p>'
})
En este ejemplo, el objeto con las opciones es pasado al constructor de Vue como segundo argumento para definir un componente reutilizable.
La Options API es fácil de aprender para quienes están familiarizados con otros frameworks de JavaScript, pero con el tiempo, se vuelve un poco más difícil de manejar y mantener con un alto grado de complejidad en el código.


# Composition Api (Vue 3)

La Composition API es una nueva característica en Vue.js (versión 3) que permite escribir componentes de Vue de una manera diferente a la tradicional "Options API". La Composition API permite escribir componentes basados en funciones en lugar de objetos, lo que permite una mayor flexibilidad y reutilización de código. También facilita la lectura y el mantenimiento del código al permitir una mejor organización del mismo.

# Watch: 

En Vue.js, el "watch" es una función que permite realizar un seguimiento de cambios en una propiedad de datos específica y ejecutar una acción específica cuando esa propiedad cambia. Se utiliza para escuchar cambios en una propiedad y actualizar otras partes de la aplicación en consecuencia. Por ejemplo, si una propiedad se usa para filtrar una lista, un "watch" puede ser configurado para actualizar la lista cada vez que la propiedad de filtro cambia.

# v-model

v-model es una directiva en Vue.js que se utiliza para crear una relación bidireccional entre un elemento de formulario y una propiedad de datos. Es similar a v-bind para establecer el valor de un elemento de formulario y v-on para escuchar eventos de cambio en el elemento.

La sintaxis para usar v-model es:

<template>
  <input v-model="nombrePropiedad">
</template>

<script>
export default {
  data() {
    return {
      nombrePropiedad: ''
    }
  }
}
</script>
En el ejemplo anterior, la entrada está vinculada a la propiedad nombrePropiedad en el objeto data. Cualquier cambio en el valor de la entrada se reflejará en la propiedad y viceversa.

También se puede utilizar v-model en elementos como select, checkbox o radio para vincular su valor a una propiedad de datos.

# v-bind
El "v-bind" en Vue.js es una directiva que se utiliza para enlazar una propiedad de un elemento del DOM con una propiedad de un componente Vue. Con esta directiva, puedes actualizar automáticamente el valor de una propiedad del DOM cuando cambia el valor de una propiedad en el componente. Por ejemplo, si tienes un componente Vue con una propiedad llamada "mensaje" y quieres enlazar esa propiedad con el valor de un elemento de entrada, puedes utilizar "v-bind" de la siguiente manera: <input v-bind:value="mensaje">


# Sección 6: Introduccion a las pruebas unitarias y de integracion