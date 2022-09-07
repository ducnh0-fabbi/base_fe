import axios from '@/plugins/axios';

const LOGIN = "/login";
const REGISTER = '/register';
const ZIP_CODE = (zipcode) => `prefectures/${zipcode}`;
const CONFIRM_REGISTER = (token) => `verify-email/${token}`;
const REFRESH_TOKEN = '/refresh-token';

export async function login(payload) {
  try {
    const { data } = await axios.post(`${LOGIN}`, payload);

    return data;
  } catch (error) {
    return { error };
  }
}

export async function register(payload) {
  try {
    const { data } = await axios.post(`${REGISTER}`, payload);

    return data;
  } catch (error) {
    return { error };
  }
}

export async function getZipCode(payload) {
  try {
    const { data } = await axios.get(`${ZIP_CODE(payload)}`, payload);

    return data;
  } catch (error) {
    return { error };
  }
}

export async function confirmRegister(payload) {
  try {
    const { data } = await axios.get(`${CONFIRM_REGISTER(payload)}`, payload);

    return data;
  } catch (error) {
    return { error };
  }
}

export async function refreshToken(payload) {
  try {
    const data = await axios.post(`${REFRESH_TOKEN}`, payload);

    return data;
  } catch (error) {
    return { error };
  }
}
