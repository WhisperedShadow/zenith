// Navbar.jsx
import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className={styles.navbar}>
        <img src="/logo/nklogo.png" alt="" className={styles.logoimg}/>
        
        {/* Hamburger Icon */}
        <div 
          className={styles.hamburger} 
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>

        {/* Navigation Links */}
        <ul className={`${styles.navbarList} ${isOpen ? styles.active : ''}`}>
          <li><a href="/">HOME</a></li>
          <li><a href="/tech">TECHNICAL</a></li>
          <li><a href="/nonetech">NON-TECHNICAL</a></li> 
          <li><a href="/contact">CONTACT</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;