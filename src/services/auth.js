export const fetchSignup = (name, email, password) => {
  console.log(name, email, password);
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
