import axios from 'axios';

export const getRequest = async (url: any) => {
    try {
        const apiResponse = await axios.get(url);
        const response = apiResponse.status == 200 ? apiResponse.data : []
        return response
    } catch (error) {
        console.log(error);
    }
}