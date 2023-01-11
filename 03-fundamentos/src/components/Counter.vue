<template>
    <h2>{{ cambiarNombre }}</h2>
    <p>{{ counter }} <sup>2</sup> {{ frasesCounter }}</p>

    <div>
        <!-- El atajo de v-on es igual que @ -->
        <button @click="incremento">+1</button>
        <button v-on:click="decremento">-1</button>
    </div>


 
</template>

<script>
export default {
    props:['title','start'],// Los atributos,parametros de un componente    
    name:'Counter',// Nombre que se va asignar en el componente DevTools
    data(){
        //Es una funcion que devuelve un obejto reactiva
        // Esta pendiente de cualquier cambio y va a reaccionar
        return{
            counter:this.start
        }

    },
    methods:{
        getCuadrado(){
            return this.counter * this.counter //Hace refecrencia al counter de la data
        },
        incremento(){
            this.counter+=1;
        },
        decremento(){
            if(this.counter>0)
               this.counter-=1;

        }
    },
    computed:{
        //Los metodos dentro del computed se llaman solo una vez. A pesar de que haya invocado 10 veces
       frasesCounter(){
        console.log("Compuned frasesCounter")
        return this.counter * this.counter;

       } ,
       cambiarNombre(){
        return this.title !== undefined ? this.title : "Moreans"
       }
    }

}
</script>

<style>

</style>


