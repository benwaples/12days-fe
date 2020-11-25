import { RequestBodyType } from "../types";
const API = 'http://localhost:7890'

const request = async(path: string, method: string, body: RequestBodyType | string) => {
  const res = await fetch(`${API}${path}`, {
    method,
    headers: ['POST', 'PUT', 'PATCH'].includes(method)
      ? {'Content-Type': 'application/json'}
      : {}
      ,
    credentials: 'include',
    body: ['POST', 'PUT', 'PATCH'].includes(method)
      ? JSON.stringify(body)
      : null
  });

  const json = await res.json();

  if(!res.ok) return json;
  return json;
}

export const post = (path: string, body: RequestBodyType) => request(path, 'POST', body);
export const get = (path: string) => request(path, 'GET', '');
export const put = (path: string, body: string) => request(path, 'PUT', body);
export const del = (path: string) => request(path, 'DELETE', '');