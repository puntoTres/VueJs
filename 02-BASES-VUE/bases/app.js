const app = Vue.createApp({
    // template: `
    // <h1> Hola Mundo </h1>   
    // <p>Desde apps </p>
    // <p> Bloque Porros</p>
    // `

    data(){ //El estado de la applicacion es reactivo
        return{
            //Este objeto es reactivo, vue renderiza al instante
            title: "Marron",
            message:"muerte a moreas tejerina"
        }
    },
    methods:{
        cambiarTitulo( event ){
            console.log("Fafo ",event)
            this.message = "Moron esta con la fafa"
            this.capitalize()
        },
        capitalize(){
            this.title = this.title.toUpperCase()
        }
    },
});

app.mount('#myApp');