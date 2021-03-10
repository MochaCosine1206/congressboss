import axios from 'axios';

const fetchPosts =  async () => {
    const response = await axios.get("http://localhost:8000/apis/members/")

    return response.data
}

export default fetchPosts