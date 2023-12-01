import axios from "axios";

export const getFetchMisionesApi = async () => {
  const apiUrl = "http://localhost:5020/api/Misions";

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Accept: "text/plain", // Puedes ajustar los encabezados según tus necesidades
      },
    });
    console.log("Respuesta exitosa:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching misiones:", error);
    throw error;
  }
};

export const postFetchMisionApi = async (mision) => {
  const apiUrl = "http://localhost:5020/api/Misions";

  try {
    const response = await axios.post(apiUrl, mision, {
      headers: {
        Accept: "text/plain",
        // Puedes ajustar los encabezados según tus necesidades
      },
    });
    console.log("Respuesta exitosa:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching misiones:", error);
    throw error;
  }
};

export const putFetchMisionApi = async (id, mision) => {
  const apiUrl = "http://localhost:5020/api/Misions";

  try {
    const response = await axios.put(apiUrl + "/" + id, mision, {
      headers: {
        Accept: "text/plain",
        // Puedes ajustar los encabezados según tus necesidades
      },
    });
    console.log("Respuesta exitosa:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching misiones:", error);
    throw error;
  }
};

export const deleteFetchMisionApi = async (id) => {
  const apiUrl = "http://localhost:5020/api/Misions";

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
    console.error("Error fetching misiones:", error);
    throw error;
  }
};
