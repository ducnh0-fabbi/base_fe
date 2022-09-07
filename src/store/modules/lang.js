import Cookies from "js-cookie";
import * as types from "../mutation-types";

export const state = {
  locale: Cookies.get("project_locale") || "vi"
};

// getters
export const getters = {
  locale: state => state.locale
};

// mutations
export const mutations = {
  [types.SET_LOCALE](state, { locale }) {
    state.locale = locale;
  }
};

// actions
export const actions = {
  setLocale({ commit }, { locale }) {
    commit(types.SET_LOCALE, { locale });

    Cookies.set("project_locale", locale, { expires: 365 });
  }
};
