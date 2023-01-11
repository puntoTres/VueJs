<template>
    <h2>Counter</h2>
    <p>{{ counter }} <sup>2</sup> {{ frasesCounter }}</p>
    <p>{{ counter }} <sup>2</sup> {{ frasesCounter }}</p>
    <p>{{ counter }} <sup>2</sup> {{ frasesCounter }}</p>
    <p>{{ counter }} <sup>2</sup> {{ frasesCounter }}</p>
    <p>{{ counter }} <sup>2</sup> {{ frasesCounter }}</p>
    <p>{{ counter }} <sup>2</sup> {{ frasesCounter }}</p>
    <p>{{ counter }} <sup>2</sup> {{ frasesCounter }}</p>
    <p>{{ counter }} <sup>2</sup> {{ frasesCounter }}</p>
    <p>{{ counter }} <sup>2</sup> {{ frasesCounter }}</p>
    <p>{{ counter }} <sup>2</sup> {{ frasesCounter }}</p>
    <!-- <p>{{ counter }} <sup>2</sup> {{ counter * counter }}</p> -->
</template>

<script>
export default {
    name:'Counter',// Nombre que se va asignar en el componente DevTools
    data(){
        //Es una funcion que devuelve un obejto reactiva
        // Esta pendiente de cualquier cambio y va a reaccionar
        return{
            counter:5
        }

    },
    methods:{
        getCuadrado(){
            return this.counter * this.counter //Hace refecrencia al counter de la data
        }
    },
    computed:{
        //Los metodos dentro del computed se llaman solo una vez. A pesar de que haya invocado 10 veces
       frasesCounter(){
        console.log("Compuned frasesCounter")
        return this.counter * this.counter;

       } 
    }

}
</script>

<style>

</style>


