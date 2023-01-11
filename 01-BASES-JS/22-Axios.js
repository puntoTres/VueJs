/*import axios from 'axios';*/

const apiKey = '6DjV26FkPzU49xvOVIEeWMLuz4ovTwqC';

const giphyApi = axios.create({

    baseURL: 'https://api.giphy.com/v1/gifs',
    params:  {
        api_key: apiKey
    }
})

// giphyApi.get('/random')
//     .then( reps => {
//         const { data } = reps.data;
//         const { url } = data.images.original;

//         const img = document.createElement('img');
//         img.src = url;
//         document.body.appendChild(img);

//     })

export default giphyApi;