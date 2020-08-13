export const fetchGoals = () => {
  return fetch('https://localhost:7890/api/v1/goals/')
    .then(res => res.json());
};
