import React, { useState } from 'react';
import { useLogin } from '../../hooks/AuthContext';
import AuthError from './AuthError';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = useLogin();
  const history = useHistory();

  const handleChange = ({ target }) => {
    if(target.name === 'email') setEmail(target.value);
    if(target.name === 'password') setPassword(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    login(email, password)
      .then(() => history.push('/dashboard'));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" autoComplete="email" placeholder="Email" value={email} onChange={handleChange} />
        <input type="password" name="password" autoComplete="current-password" placeholder="Password" value={password} onChange={handleChange} />
        <button>Login</button>
      </form>
      <AuthError />
    </>
  );
};

export default Login;
