import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { styles } from './styles';

export default function Navigation(){
  return (
    <div>
      <nav style={styles.nav}>
        <div style={styles.navLinks}>
          <Link style={styles.link} to="/">HOME</Link>
          <Link style={styles.link} to="/price-checker">PRICE CHECKER</Link>
          <Link style={styles.link} to="/api-practice">API PRACTICE</Link>
        </div>
        <button style={styles.navBtn} onClick={() => alert('Welcome to Activity 4!')}>Contact</button>
      </nav>
      <div style={styles.container}>
        <Outlet />
      </div>
    </div>
  );
}
