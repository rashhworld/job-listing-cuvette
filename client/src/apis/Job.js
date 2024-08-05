import axios from 'axios';
import { toast } from 'react-toastify';
import { handleApiRes, handleApiErr } from '../utils/apiUtils';
const baseURL = import.meta.env.VITE_API_BASE_URL;

export const fetchAllJobsApi = async ({ title, skills }) => {
    try {
        const response = await axios.post(`${baseURL}/job`, { title, skills });

        const { status, data } = response.data;
        if (status === 'success') {
            return data;
        } else {
            handleApiRes(response.data);
        }
    } catch (error) {
        handleApiErr(error, navigate);
    }
};