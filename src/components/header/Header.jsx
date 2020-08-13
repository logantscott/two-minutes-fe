import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';
import { useCurrentUser } from '../../hooks/AuthContext';

const Header = () => {
  const currentUser = useCurrentUser();

  return (
    <nav className={styles.Header}>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li>{
          currentUser ?
            <>
              <Link to='/dashboard'>Dashboard</Link>
              <Link to='/signout'>Sign Out</Link> 
            </>
            : <Link to='/login'>Signup/Login</Link>
        }</li>
      </ul>
    </nav>
  );
};

export default Header;
