import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './Header.css';
import { useCurrentUser, useLogout } from '../../hooks/AuthContext';

const Header = () => {
  const currentUser = useCurrentUser();
  const history = useHistory();
  const logout = useLogout();

  const handleLogout = () => {
    logout()
      .then(() => history.push('/'));
  };

  return (
    <nav className={styles.Header}>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li>{
          currentUser ?
            <>
              <Link to='/dashboard'>Dashboard</Link>
              <a onClick={handleLogout}>Logout</a>
            </>
            : <Link to='/login'>Signup/Login</Link>
        }</li>
      </ul>
    </nav>
  );
};

export default Header;
