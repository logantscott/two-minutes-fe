import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';
import { useCurrentUser, useLogout } from '../../hooks/AuthContext';

const Header = () => {
  const currentUser = useCurrentUser();
  const logout = useLogout();

  const handleLogout = () => logout();

  return (
    <nav className={styles.Header}>
      <ul>
        <li><Link to='/'>Home</Link></li>
        {
          currentUser ?
            <>
              <li><Link to='/dashboard'>Dashboard</Link></li>
              <li><a onClick={handleLogout}>Logout</a></li>
            </>
            : <Link to='/login'>Signup/Login</Link>
        }
      </ul>
    </nav>
  );
};

export default Header;
