import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID f_-tAUqxDkwMnV_l6ZJ7YSWAhFRnfKUsugiy3tJM54I',
        },
        params: {
            query: term,
        }
    });

    // console.log(response);
    return response.data.results;

};

export default searchImages;