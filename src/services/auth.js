export const fetchSignup = (name, email, password) => {
  return fetch('http://localhost:7890/api/v1/users/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ name, email, password })
  })
    .then(res => res.json());
};

export const fetchLogin = (email, password) => {
  return fetch('http://localhost:7890/api/v1/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ email, password })
  })
    .then(res => res.json());
};
