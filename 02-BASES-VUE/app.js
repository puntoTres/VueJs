const app = Vue.createApp({
    // template: `
    // <h1> Hola Mundo </h1>   
    // <p>Desde apps </p>
    // <p> Bloque Porros</p>
    // `

    data(){
        return{
            title: "Marron",
            message:"muerte a moreas"
        }
    },
    methods:{
        cambiarTitulo(){
            console.log("Fafo")
        }
    }
});

app.mount('#myApp');