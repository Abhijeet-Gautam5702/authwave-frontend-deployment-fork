import { AUTHWAVE_BASE_URL } from "@/constants";
import { IApiError, IApiResponse } from "@/types/response.types";
import { QueryBuilder } from "@/utils/query-builder";
import axios from "axios";

/* ------------ Interfaces ------------ */
export interface LoginMethods {
  emailPassword: boolean;
  OTPonEmail?: boolean;
  OTPonMobile?: boolean;
  magicURLonEmail?: boolean;
}
export interface SecurityConfig {
  userLimit?: number;
  userSessionLimit?: number;
}
export interface EmailTemplateConfig {
  userVerification?: string;
  resetPassword?: string;
  userLimitExceeded?: string;
  userSessionLimitExceeded?: string;
  OTPonEmail?: string;
  magicURLonEmail?: string;
}
export interface IProjectConfig {
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

  public resetSecuritySettings = async (
    projectId: string,
    projectKey: string
  ) => {
    try {
      const response = await axios.put(
        `${AUTHWAVE_BASE_URL}/project/reset/security-setting`,
        {},
        {
          withCredentials: true,
          headers: { "project-id": projectId, "project-key": projectKey },
        }
      );
      return response.data as IApiResponse;
    } catch (error: any) {
      throw error.response.data as IApiError;
    }
  };

  public updateSecuritySettings = async (
    projectId: string,
    projectKey: string,
    data: SecurityConfig
  ) => {
    try {
      const response = await axios.put(
        `${AUTHWAVE_BASE_URL}/project/update/security`,
        {
          security: data,
        },
        {
          withCredentials: true,
          headers: { "project-id": projectId, "project-key": projectKey },
        }
      );
      return response.data as IApiResponse;
    } catch (error: any) {
      throw error.response.data as IApiError;
    }
  };

  public generateNewProjectKey = async (
    projectId: string,
    projectKey: string
  ) => {
    try {
      const response = await axios.put(
        `${AUTHWAVE_BASE_URL}/project/generate-new-key`,
        {},
        {
          withCredentials: true,
          headers: { "project-id": projectId, "project-key": projectKey },
        }
      );
      return response.data as IApiResponse;
    } catch (error: any) {
      throw error.response.data as IApiError;
    }
  };

  public updateAppName = async (
    projectId: string,
    projectKey: string,
    appName: string
  ) => {
    try {
      const response = await axios.put(
        `${AUTHWAVE_BASE_URL}/project/update/app-name`,
        { appName },
        {
          withCredentials: true,
          headers: { "project-id": projectId, "project-key": projectKey },
        }
      );
      return response.data as IApiResponse;
    } catch (error: any) {
      throw error.response.data as IApiError;
    }
  };

  public updateAppEmail = async (
    projectId: string,
    projectKey: string,
    appEmail: string
  ) => {
    try {
      const response = await axios.put(
        `${AUTHWAVE_BASE_URL}/project/update/app-email`,
        { appEmail },
        {
          withCredentials: true,
          headers: { "project-id": projectId, "project-key": projectKey },
        }
      );
      return response.data as IApiResponse;
    } catch (error: any) {
      throw error.response.data as IApiError;
    }
  };

  public updateLoginMethods = async (
    projectId: string,
    projectKey: string,
    data: LoginMethods
  ) => {
    try {
      const response = await axios.put(
        `${AUTHWAVE_BASE_URL}/project/update/login-methods`,
        {
          loginMethods: data,
        },
        {
          withCredentials: true,
          headers: { "project-id": projectId, "project-key": projectKey },
        }
      );
      return response.data as IApiResponse;
    } catch (error: any) {
      throw error.response.data as IApiError;
    }
  };

  public deleteProject = async (projectId: string) => {
    try {
      const response = await axios.delete(
        `${AUTHWAVE_BASE_URL}/project/delete/${projectId}`,
        {
          withCredentials: true,
        }
      );
      return response.data as IApiResponse;
    } catch (error: any) {
      throw error.response.data as IApiError;
    }
  };

  public getUsers = async (
    projectId: string,
    projectKey: string,
    filters: {
      page?: number;
      itemLimit?: number;
      startDate?: string;
      endDate?: string;
    }
  ) => {
    try {
      let queryString = QueryBuilder.paginationAndDateFilters(filters);

      const response = await axios.get(
        `${AUTHWAVE_BASE_URL}/admin/get-all-users?${queryString}`,
        {
          withCredentials: true,
          headers: { "project-id": projectId, "project-key": projectKey },
        }
      );
      return response.data as IApiResponse;
    } catch (error: any) {
      throw error.response.data as IApiError;
    }
  };

  public getUserDetails = async (
    projectId: string,
    projectKey: string,
    userId: string
  ) => {
    try {
      const response = await axios.get(
        `${AUTHWAVE_BASE_URL}/admin/get-user/${userId}`,
        {
          withCredentials: true,
          headers: { "project-id": projectId, "project-key": projectKey },
        }
      );
      return response.data as IApiResponse;
    } catch (error: any) {
      throw error.response.data as IApiError;
    }
  };

  public searchUsers = async (
    projectId: string,
    projectKey: string,
    searchQuery: string,
    filters: {
      page?: number;
      itemLimit?: number;
      startDate?: string;
      endDate?: string;
    }
  ) => {
    try {
      let queryString = QueryBuilder.paginationAndDateFilters(filters);
      const response = await axios.get(
        `${AUTHWAVE_BASE_URL}/admin/search-users?searchQuery=${searchQuery}&${queryString}`,
        {
          withCredentials: true,
          headers: { "project-id": projectId, "project-key": projectKey },
        }
      );
      return response.data as IApiResponse;
    } catch (error: any) {
      throw error.response.data as IApiError;
    }
  };

  public deleteUser = async (
    projectId: string,
    projectKey: string,
    userId: string
  ) => {
    try {
      const response = await axios.delete(
        `${AUTHWAVE_BASE_URL}/admin/delete-user/${userId}`,
        {
          withCredentials: true,
          headers: { "project-id": projectId, "project-key": projectKey },
        }
      );
      return response.data as IApiResponse;
    } catch (error: any) {
      throw error.response.data as IApiError;
    }
  };

  public verifyUser = async (
    projectId: string,
    projectKey: string,
    userId?: string,
    email?: string
  ) => {
    try {
      const response = await axios.put(
        `${AUTHWAVE_BASE_URL}/admin/verify-user`,
        {
          userId,
          email,
        },
        {
          withCredentials: true,
          headers: { "project-id": projectId, "project-key": projectKey },
        }
      );
      return response.data as IApiResponse;
    } catch (error: any) {
      throw error.response.data as IApiError;
    }
  };

  public updateUserDetails = async (
    projectId: string,
    projectKey: string,
    userId: string,
    data: Partial<{
      username: string;
      email: string;
    }>
  ) => {
    try {
      const response = await axios.put(
        `${AUTHWAVE_BASE_URL}/admin/update-user/${userId}`,
        data,
        {
          withCredentials: true,
          headers: { "project-id": projectId, "project-key": projectKey },
        }
      );
      return response.data as IApiResponse;
    } catch (error: any) {
      throw error.response.data as IApiError;
    }
  };
}

export const projectService = new ProjectService();
