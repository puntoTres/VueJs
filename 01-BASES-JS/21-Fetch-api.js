const apiKey = '6DjV26FkPzU49xvOVIEeWMLuz4ovTwqC'

//https://api.giphy.com/v1/gifs/random?api_key=6DjV26FkPzU49xvOVIEeWMLuz4ovTwqC


//Para hacer peticiones en http

//Primera opcion
// fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
//     .then(
//         resp => {
//           resp.json()
//               .then(resp => console.log(resp))
//         }
//     )

//Segunda opcion mas sencilla
fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then(resp => resp.json())
    .then(({ data }) => {
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.appendChild(img);
    })
       
    