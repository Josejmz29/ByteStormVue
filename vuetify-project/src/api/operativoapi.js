
import axios from 'axios';

export const getFetchOperativosApi = async () => {

  const apiUrl = 'http://localhost:5020/api/Operativo'

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        'Accept': 'text/plain', // Puedes ajustar los encabezados según tus necesidades
      },
    });
    console.log('Respuesta exitosa:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching operativos:', error);
    throw error;
  }
};

export const postFetchOperativoApi = async (operativo) => {
  
    const apiUrl = 'http://localhost:5020/api/Operativo'
  
    try {
      const response = await axios.post(apiUrl, operativo, {
        headers: {
          'Accept': 'text/plain',
             // Puedes ajustar los encabezados según tus necesidades
        },
      });
      console.log('Respuesta exitosa:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching operativos:', error);
      throw error;
    }
  }

  export const putFetchOperativoApi = async (id, operativo) => {
    
      const apiUrl = 'http://localhost:5020/api/Operativo'
    
      try {
        const response = await axios.put(apiUrl + '/' + id, operativo, {
          headers: {
            'Accept': 'text/plain',
              // Puedes ajustar los encabezados según tus necesidades
          },
        });
        console.log('Respuesta exitosa:', response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching operativos:', error);
        throw error;
      }
    }

    export const deleteFetchOperativoApi = async (id) => {  
      const apiUrl = 'http://localhost:5020/api/Operativo'
    
      try {
        const response = await axios.delete(apiUrl + '/' + id, {
          headers: {
            'Accept': 'text/plain',
              // Puedes ajustar los encabezados según tus necesidades
          },
        });
        console.log('Respuesta exitosa:', response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching operativos:', error);
        throw error;
      }
    }


      