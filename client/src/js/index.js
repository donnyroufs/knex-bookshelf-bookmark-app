import Auth from "./services/Auth.service";
import Chetsbull from "chetsbull";

const dummyAccount = {
  email: "admin@mail.com",
  password: "123456",
};

new Chetsbull(
  (view) => ({
    async login(context) {
      context.event.preventDefault();
      if (!Auth.isAuthenticated()) {
        await Auth.login(dummyAccount);
        view.status.innerHTML = "You are logged in.";
        view.login.innerHTML = "Logout";
      } else {
        Auth.logout();
        view.status.innerHTML = "Logged out.";
        view.login.innerHTML = "Login";
      }
    },
  }),
  "app"
);
