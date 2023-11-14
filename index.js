require('dotenv').config();

// Print out value of API key stored in .env file
const api = process.env.API_KEY;

async function getImages(query){
    try{
    const endpoint =`https://api.giphy.com/v1/gifs/search?api_key=${api}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    const response = await fetch(endpoint)
    if(!response.ok){
        throw new Error("failed to fetch data")
    }
    const data = await response.json()
    //  const image = data.data[0].images.original.url
      console.log(data)
    }
    catch(error){
      console.log(error)
    }
}

(async () => {
    try{
        const query = 'dogs';
        const gif = await getImages(query)
    }catch(error){
        console.log(error)
    }
})();
