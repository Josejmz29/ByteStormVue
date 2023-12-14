import axios from "axios";

export const postValidate = async (usuario) => {
    const apiUrl = "http://localhost:5020/api/Autenticacion/validate";
  
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