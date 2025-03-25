import React from "react";
import styles from "./Footer.module.css"; // Ensure correct path

const Footer = () => {
  const quickLinks = {
    id: 1,
    name: "Quick Links",
    links: [
      { text: "Home", url: "/", icon: "fa-solid fa-house" },
      { text: "Tech", url: "/tech", icon: "fa-solid fa-laptop" },
      { text: "Non-Tech", url: "/nonetech", icon: "fa-solid fa-gamepad" },
      { text: "Contact", url: "/contact", icon: "fa-solid fa-phone" },
    ],
  };

  const socialMedia = {
    id: 2,
    name: "Social Media",
    links: [
      {
        text: "Jeppiaar Engineering College",
        url: "https://jeppiaarcollege.org/jeppiaar/",
        icon: "fa-solid fa-graduation-cap",
      },
      {
        text: "Zenith25__",
        url: "https://www.instagram.com/zenith25__",
        icon: "fa-brands fa-instagram",
      },
    ],
  };

  const Contents = [quickLinks, socialMedia];

  return (
    <section className={styles.footerSection}>
      {Contents.map((content) => (
        <div key={content.id} className={styles.footerContent}>
          <h3>{content.name}</h3>
          <ul>
            {content.links.map((link) => (
              <li key={link.text} className={styles.footerLink}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <i className={link.icon}></i>
                  <p> {link.text}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Footer;
