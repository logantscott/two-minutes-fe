export const fetchSignup = (email, password) => {
  return fetch('https://localhost:7890/api/v1/users/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ email, password })
  })
    .then(res => res.json());
};
