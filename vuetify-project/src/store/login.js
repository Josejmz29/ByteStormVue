import axios from 'axios';
import jwtDecode from 'jwt-decode';

const state = {
  token: null,
  user: null,
};

const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  setUser(state, user) {
    state.user = user;
  },
  logout(state) {
    state.token = null;
    state.user = null;
  },
};

const actions = {
  async login({ commit }, credenciales) {
    try {
      const response = await axios.post('http://localhost:3000/login', credenciales);
      const { token } = response.data;

      // Decodificar el token para obtener la información del usuario
      const user = jwtDecode(token);

      commit('setToken', token);
      commit('setUser', user);
    } catch (error) {
      console.error('Error en el login:', error);
    }
  },
  logout({ commit }) {
    commit('logout');
  },
};

export default {
  state,
  mutations,
  actions,
};
