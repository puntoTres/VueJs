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