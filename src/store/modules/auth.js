import {
  login, register, getZipCode, confirmRegister, refreshToken
} from '@/apis/auth';
import { setAccessToken, getRememberMe, removeAccessToken } from '@/utils/token';
import { AUTH } from '../mutation-types';

export const state = {
  accessToken: '',
  isLogin: false,
  dataZipCode: [],
  confirmRes: null,
  dataRegister: null,
  language: 'vn',
};

export const getters = {
  isLogin: (state) => state.isLogin,
  dataZipCode: state => state.dataZipCode,
  getDataRegister: state => state.dataRegister,
  confirmRes: state => state.confirmRes,
  language: state => state.language,
};

export const mutations = {
  [AUTH.LOGIN](state, data) {
    if (!data.error) {
      state.accessToken = data.data.access_token;
      setAccessToken(data.data.access_token, data.data.refresh_token, data.data.user_id);
    }
  },

  [AUTH.SET_IS_LOGIN](state, payload) {
    state.isLogin = payload;
  },

  [AUTH.ZIP_CODE](state, data) {
    state.dataZipCode = data;
  },

  [AUTH.SET_REGISTER_DATA](state, data) {
    state.dataRegister = data;
  },

  [AUTH.CONFIRM_REGISTER](state, data) {
    state.confirmRes = data;
  },
  [AUTH.LOGOUT](state) {
    state.isLogin = false;
    state.accessToken = null;
    removeAccessToken();
  },
  [AUTH.CHANGE_LANGUAGE](state, language) {
    state.language = language;
  }
};

export const actions = {
  async login({ commit }, payload) {
    const res = await login(payload);
    if (res.error) {
      return res;
    }
    commit(AUTH.LOGIN, res);
    return false;
  },
  async register(_, payload) {
    const res = await register(payload);
    if (res.error) {
      return res;
    }

    return false;
  },

  async getZipCode({ commit }, payload) {
    const response = await getZipCode(payload);
    if (response.error) {
      return response;
    }
    commit(AUTH.ZIP_CODE, response);
    return false;
  },

  async confirmRegister({ commit }, payload) {
    const response = await confirmRegister(payload);
    commit(AUTH.CONFIRM_REGISTER, response);
  },

  async actSetDataRegister({ commit }, payload) {
    commit(AUTH.SET_REGISTER_DATA, payload);
  },

  async refreshToken({ commit }, payload) {
    const response = await refreshToken(payload);
    if (response.data) {
      const data = {
        data: response.data,
        checkBox: getRememberMe(),
      };
      commit(AUTH.LOGIN, data);
    }
    return response;
  },

  async logOut({ commit }) {
    commit(AUTH.LOGOUT);
  },

  changeLanguage({ commit }, language) {
    commit(AUTH.CHANGE_LANGUAGE, language);
  }
};
