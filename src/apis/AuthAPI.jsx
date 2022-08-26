import axios from "axios";

const loginAPI = async (userDetails) => {
  return await axios.post("/api/auth/login", {
    email: userDetails.email,
    password: userDetails.password,
  });
};

const SignupAPI = async (userDetails) => {
  return await axios.post("/api/auth/signup", {
    username: userDetails.firstName,
    email: userDetails.email,
    password: userDetails.password,
  });
};

export {loginAPI, SignupAPI};
