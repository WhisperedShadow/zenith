import React, { useState, useEffect } from 'react';
import styles from "./Home.module.css";

const EventCountdown = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const eventDate = new Date('2025-04-03T00:00:00');

    const countdownInterval = setInterval(() => {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
      } else {
        clearInterval(countdownInterval);
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className={styles.countdownContainer}>
      <h2 className={styles.countdownTitle}>Event Starts In</h2>
      <div className={styles.countdownGrid}>
        {Object.entries(timeRemaining).map(([key, value], index) => (
          <div 
            key={key} 
            className={styles.countdownItem} 
            style={{'--i': index + 1}}
          >
            <span className={styles.countdownNumber}>{value}</span>
            <span className={styles.countdownLabel}>{key}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCountdown;