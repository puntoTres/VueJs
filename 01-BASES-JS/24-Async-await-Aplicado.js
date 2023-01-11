import giphyApi from "./22-Axios.js";


const getImage = async() => {
    try {
       const { data } = (await giphyApi.get('/random')).data
       const { url } = data.images.original
      
       const img = document.createElement('img');
       img.src = url;
       document.body.appendChild(img);

    } catch (error) {
        console.log('Error en la peticion',error)
        throw eorr
        
    }

}

getImage();