const NONBODY_METHODS = ['GET', 'DELETE'];

const request = (path, method, body) => {
  return fetch(`${process.env.API_URL}${path}`, {
    method,
    headers: NONBODY_METHODS.includes(method) ? {} 
      : { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: NONBODY_METHODS.includes(method) ? null 
      : JSON.stringify(body)
  })
    .then((res) => res.json());
};

export const post = (path, body) => request(path, 'POST', body);
export const get = (path) => request(path, 'GET');
export const put = (path, body) => request(path, 'PUT', body);
export const patch = (path, body) => request(path, 'PATCH', body);
export const del = (path) => request(path, 'DELETE');
