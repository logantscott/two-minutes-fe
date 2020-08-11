import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

const Header = () => {

  return (
    <nav className={styles.Header}>
      <ul>
        <li><Link to='/'>Home</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
