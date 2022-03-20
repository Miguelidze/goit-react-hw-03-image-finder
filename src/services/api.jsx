import axios from "axios"
axios.defaults.baseURL = "https://pixabay.com/api/";
const KEY = "24956916-3e1f68b95206d43ba1c29444e"
const fetchImages = async (query, page) => {
    const response = await axios.get(
        `?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data.hits;
};
export default fetchImages;