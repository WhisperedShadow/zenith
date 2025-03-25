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
    <>
      <section className={styles.footerSection}>
        {Contents.map((content) => (
          <div key={content.id} className={styles.footerContent}>
            <h3>{content.name}</h3>
            <ul>
              {content.links.map((link) => (
                <li key={link.text} className={styles.footerLink}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <i className={link.icon} style={{ marginRight: "8px" }}></i>
                    <p>{link.text}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2174.313161337269!2d80.218972389064!3d12.866468900234176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b1b94bbc64b%3A0xc8589bd91ae8d1cf!2sCSE%20department%20of%20Jeppiaar%20Engineering%20college!5e0!3m2!1sen!2sin!4v1742901564600!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={styles.map}
        ></iframe>
      </section>
    </>
  );
};

export default Footer;
