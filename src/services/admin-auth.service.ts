import { AUTHWAVE_BASE_URL } from "@/constants";
import { IApiError, IApiResponse } from "@/types/response.types";
import axios from "axios";

interface SignupData {
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

class AdminAuthService {
  public signup = async (data: SignupData) => {
    try {
      const response = await axios.post(
        `${AUTHWAVE_BASE_URL}/admin/account/create`,
        data,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data as IApiResponse;
    } catch (error: any) {
      throw error.response.data as IApiError;
    }
  };

  public login = async (data: LoginData) => {
    try {
      const response = await axios.post(
        `${AUTHWAVE_BASE_URL}/admin/account/login`,
        data,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data as IApiResponse;
    } catch (error: any) {
      throw error.response.data as IApiError;
    }
  };
}

export const adminAuthService = new AdminAuthService();
