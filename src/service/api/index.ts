import axios from "axios";
import { AuthSlice } from "types/auth.type";

export const ApiRequest = {
  getUserInfo: async (token: string | any): Promise<AuthSlice> => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`
      );
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export default ApiRequest;
