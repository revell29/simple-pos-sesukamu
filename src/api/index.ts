import axios from "axios";
import { AuthSlice } from "redux/auth/authSlice";

const SESSION_TOKEN = sessionStorage.getItem("token");

export const ApiRequest = {
  getUserInfo: async (): Promise<AuthSlice> => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${SESSION_TOKEN}`
      );
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export default ApiRequest;
