import axios from "axios";

class Auth {
  static authenticated = false;
  static base_uri = "http://localhost:5000/api/v1/";

  static async login(credentials) {
    // !TODO Validation
    try {
      const response = await axios.post(
        `${this.base_uri}/auth/login`,
        credentials
      );
      this.setToken({ token: response.data.token });
      this.authenticated = true;
    } catch (err) {
      this.authenticated = false;
    }
  }

  static async register(credentials) {
    // !TODO Validation
    if (this.authenticated) return;
    return axios.post(`${this.base_uri}/user/register`, credentials);
  }

  static logout() {
    //? Can we tell the server that the current token isnt valid anymore?
    this.removeToken();
    this.authenticated = false;
  }

  static getToken() {
    localStorage.getItem("x-access-token");
  }

  static setToken({ token }) {
    localStorage.setItem("x-access-token", token);
  }

  static removeToken() {
    localStorage.removeItem("x-access-token");
  }

  static isAuthenticated() {
    return this.authenticated;
  }
}

export default Auth;
