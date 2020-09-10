import Auth from "./services/Auth.service";

const dummyAccount = {
  email: "admin@mail.com",
  password: "123456",
};

Auth.login(dummyAccount);
