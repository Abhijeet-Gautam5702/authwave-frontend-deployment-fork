import { AUTHWAVE_BASE_URL } from "@/constants";
import { IApiError, IApiResponse } from "@/types/response.types";
import axios from "axios";

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
}

export const projectService = new ProjectService();
