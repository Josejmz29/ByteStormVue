import axios from "axios";

export const getFetchEquiposApi = async () => {
  const apiUrl = "http://localhost:5020/api/Equipoes";

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Accept: "text/plain", // Puedes ajustar los encabezados según tus necesidades
      },
    });
    console.log("Respuesta exitosa:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching equipos:", error);
    throw error;
  }
};

export const postFetchEquipoApi = async (equipo) => {
  const apiUrl = "http://localhost:5020/api/Equipoes";

  try {
    const response = await axios.post(apiUrl, equipo, {
      headers: {
        Accept: "text/plain",
        // Puedes ajustar los encabezados según tus necesidades
      },
    });
    console.log("Respuesta exitosa:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching equipos:", error);
    throw error;
  }
};

export const putFetchEquipoApi = async (id, equipo) => {
  const apiUrl = "http://localhost:5020/api/Equipoes";

  try {
    const response = await axios.put(apiUrl + "/" + id, equipo, {
      headers: {
        Accept: "text/plain",
        // Puedes ajustar los encabezados según tus necesidades
      },
    });
    console.log("Respuesta exitosa:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching equipos:", error);
    throw error;
  }
};

export const deleteFetchEquipoApi = async (id) => {
  const apiUrl = "http://localhost:5020/api/Equipoes";

  try {
    const response = await axios.delete(apiUrl + "/" + id, {
      headers: {
        Accept: "text/plain",
        // Puedes ajustar los encabezados según tus necesidades
      },
    });
    console.log("Respuesta exitosa:", response.data);
    return response.data;
 } catch (error) {
    console.error("Error fetching equipos:", error);
    throw error;
  }
};

export const añadirMisionApi = async (idEquipo, misionCod) => {
  const apiUrl = `http://localhost:5020/api/Equipoes/AddMision?misionId=${misionCod}&equipoId=${idEquipo}`;

  try {
    const response = await axios.post(apiUrl, null, {
      headers: {
        'Accept': 'text/plain',
        // Puedes ajustar los encabezados según tus necesidades
      },
    });
    console.log('Respuesta exitosa:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error añadiendo operativo al equipo:', error);
    throw error;
  }
};
