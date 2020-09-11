import axios from "axios";
import { BASE_URI, TOKEN } from "../lib/constants";

class Auth {
  static authenticated = false;

  static async login(credentials) {
    // !TODO Validation
    try {
      const response = await axios.post(`${BASE_URI}/auth/login`, credentials);
      this.setToken({ token: response.data.token });
      this.authenticated = true;
    } catch (err) {
      this.authenticated = false;
    }
  }

  static async register(credentials) {
    // !TODO Validation
    if (this.authenticated) return;
    return axios.post(`${BASE_URI}/user/register`, credentials);
  }

  static logout() {
    this.removeToken();
    this.authenticated = false;
  }

  static getToken() {
    localStorage.getItem(TOKEN);
  }

  static setToken({ token }) {
    localStorage.setItem(TOKEN, token);
  }

  static removeToken() {
    localStorage.removeItem(TOKEN);
  }

  static isAuthenticated() {
    return this.authenticated;
  }
}

export default Auth;
