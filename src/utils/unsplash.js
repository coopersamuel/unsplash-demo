import API_KEYS from '../../config';

const accessKey = API_KEYS.accessKey;
const secretKey = API_KEYS.secretKey;
const redirectURI = API_KEYS.redirectURI;

const fetchPhotos = async (queryParam) => {
    try {
        let response = await fetch(`https://api.unsplash.com/search/photos?query=${queryParam}`, {
            headers: { Authorization: `Client-ID ${accessKey}`}
        });

        if (response.ok) {
            let jsonResponse = await response.json();

            if (jsonResponse.results) {
                return jsonResponse.results;
            }
        }

        throw new Error('Request failed');
    } catch (error) {
        console.log(error);
    }
}

export default fetchPhotos;