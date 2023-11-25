
import axios from 'axios';

export const fetchOperativosApi = async () => {
  try {
    const response = await axios.get('/api/operativos');
    return response.data;
  } catch (error) {
    console.error('Error fetching operativos:', error);
    throw error;
  }
};
