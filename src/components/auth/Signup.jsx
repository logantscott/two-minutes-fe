import React, { useState } from 'react';
import { useSignup } from '../../hooks/AuthContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signup = useSignup();

  const handleChange = ({ target }) => {
    if(target.name === 'email') setEmail(target.value);
    if(target.name === 'password') setPassword(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    signup(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" value={email} onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" value={password} onChange={handleChange} />
      <button>Signup</button>
    </form>
  );
};

export default Signup;
