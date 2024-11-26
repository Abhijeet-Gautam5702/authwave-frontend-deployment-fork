import { AUTHWAVE_BASE_URL } from "@/constants";
import { IApiError, IApiResponse } from "@/types/response.types";
import axios from "axios";

/* ------------ Interfaces ------------ */
interface LoginMethods {
  emailPassword: boolean;
  OTPonEmail?: boolean;
  OTPonMobile?: boolean;
  magicURLonEmail?: boolean;
}
interface SecurityConfig {
  userLimit?: number;
  userSessionLimit?: number;
}
interface EmailTemplateConfig {
  userVerification?: string;
  resetPassword?: string;
  userLimitExceeded?: string;
  userSessionLimitExceeded?: string;
  OTPonEmail?: string;
  magicURLonEmail?: string;
}
interface IProjectConfig{
  loginMethods: LoginMethods;
  security?: SecurityConfig;
  emailTemplates?: EmailTemplateConfig;
}

/* ------------ Service ------------ */
class ProjectService {
  public getProjects = async () => {
    try {
      const response = await axios.get(`${AUTHWAVE_BASE_URL}/projects/`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data as IApiResponse;
    } catch (error: any) {
      throw error.response.data as IApiError;
    }
  };

  public deleteAllProjects = async () => {
    try {
      const response = await axios.delete(
        `${AUTHWAVE_BASE_URL}/projects/delete`,
        { withCredentials: true }
      );
      return response.data as IApiResponse;
    } catch (error: any) {
      throw error.response.data as IApiError;
    }
  };

  public createProject = async (data: {
    projectName: string;
    appName: string;
    appEmail: string;
    config: IProjectConfig;
  }) => {
    try {
      const response = await axios.post(
        `${AUTHWAVE_BASE_URL}/project/create`,
        data,
        {
          withCredentials: true,
        }
      );
      return response.data as IApiResponse;
    } catch (error: any) {
      throw error.response.data as IApiError;
    }
  };
}

export const projectService = new ProjectService();
