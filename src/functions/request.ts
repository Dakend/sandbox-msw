import { Url } from "../constants";

const handlePromise = async <T>(promise: Promise<Response>): Promise<T> => {
  const response = await promise;
  const value = await response.json();
  return value;
};

export const get = async <T>(url: Url): Promise<T> => {
  const response = await handlePromise<T>(fetch(url));
  return response;
};
