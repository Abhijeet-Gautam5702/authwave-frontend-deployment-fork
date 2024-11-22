export interface IApiResponse {
  message: string;
  statusCode: number;
  data: any;
  type: string;
  success: boolean;
}

export interface IApiError {
  message: string;
  errors?: any[] | any | undefined;
  statusCode: number;
  type: string;
  data: null;
  success: boolean;
  stack?: string | undefined;
}
