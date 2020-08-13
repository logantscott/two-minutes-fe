import React, { useState } from 'react';
import { useSignup } from '../../hooks/AuthContext';
import AuthError from './AuthError';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signup = useSignup();

  const handleChange = ({ target }) => {
    if(target.name === 'name') setName(target.value);
    if(target.name === 'email') setEmail(target.value);
    if(target.name === 'password') setPassword(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    signup(name, email, password);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="name" name="name" placeholder="Name" value={name} onChange={handleChange} />
        <input type="email" name="email" autoComplete="email" placeholder="Email" value={email} onChange={handleChange} />
        <input type="password" name="password" autoComplete="new-password" placeholder="Password" value={password} onChange={handleChange} />
        <button>Signup</button>
      </form>
      <AuthError />
    </>
  );
};

export default Signup;
