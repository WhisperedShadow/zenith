import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';

const Home = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
       <div className={`${styles.imageContainerlogo} ${animationStarted ? styles.animate : ''}`}>
        <img 
          src="/logo/worstlogo.png" 
          alt="logo" 
          className={styles.image}
        />
      </div>
      
      <div className={`${styles.imageContainersam} ${animationStarted ? styles.animate : ''}`}>
        <img 
          src="/logo/samuraipng.png" 
          alt="samurai" 
          className={styles.image}
        />
      </div>

      <div className={styles.aboutsection}>

      </div>
    </div>
  );
}

export default Home;