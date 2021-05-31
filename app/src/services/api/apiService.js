import { apiURL } from '../../helpers/constants/URL';
import axios from 'axios';

// TODO
export const apiRequest = async () => {
    try {
        const response = await axios.get(`${apiURL}/`);
        return response;
    } catch (error) {
        return null;
    }
}