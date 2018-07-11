import { unsplashApiKeys } from '../../config';

const accessKey = unsplashApiKeys.accessKey;
const secretKey = unsplashApiKeys.secretKey;
const redirectURI = unsplashApiKeys.redirectURI;

let UnsplashUtils = {
    async fetchPhotos(queryParam) {
        try {
            let response = await fetch(`https://api.unsplash.com/search/photos?query=${queryParam}`, {
                headers: { Authorization: `Client-ID ${accessKey}`}
            });
    
            if (response.ok) {
                let jsonResponse = await response.json();
    
                if (jsonResponse.results) {
                    console.log(jsonResponse.results);
                    return jsonResponse.results;
                }
            }
    
            throw new Error('Photos request failed');
        } catch (error) {
            console.log(error);
        }
    },


}

export default UnsplashUtils;