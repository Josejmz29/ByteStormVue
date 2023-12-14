import axios from "axios";

export const getUsuarioApi = async (usuario) => {
  const apiUrl = `http://localhost:5020/api/Usuarios/${usuario}`;

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

export const postUsuarioApi = async (usuario) => {
  const apiUrl = "http://localhost:5020/api/Usuarios";

  try {
    const response = await axios.post(apiUrl, usuario, {
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



export const deleteFetchMisionApi = async (usuario) => {
  const apiUrl = "http://localhost:5020/api/Usuarios";

  try {
    const response = await axios.delete(apiUrl + "/" + usuario, {
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


