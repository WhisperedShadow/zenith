import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const studentCoordinates = {
    name: "Student Coordinators",
    members: [
      { name: "Harish E", number: "6381524202" },
      { name: "Anusiya T", number: "8838410941" },
      { name: "Priyadharshini R", number: "9025611732" },
      { name: "Sri Vijay S", number: "8610937144" },
    ],
  };

  const eventOrganizers = {
    name: "Event Organizers",
    members: [
      { name: "Abraham Kinston A", number: "8903550492" },
      { name: "Ashwin K", number: "9360349760" },
    ],
  };

  const organizations = [studentCoordinates, eventOrganizers];

  return (
    <section className={styles.contactSection}>
      <h1 className={styles.title}>📞 Contact Us</h1>
      <p className={styles.description}>
        Have questions about our symposium? Feel free to reach out to our coordinators and event organizers. Whether you need details about the events, registrations, or participation, we’re here to help! 📩
      </p>
      {organizations.map((organization) => (
        <div key={organization.name} className={styles.organization}>
          <h2 className={styles.orgTitle}>{organization.name}</h2>
          <div className={styles.memberGrid}>
            {organization.members.map((member) => (
              <div key={member.name} className={styles.card}>
                <i className="fa-solid fa-user-tie" aria-hidden="true"></i>
                <div className={styles.cardContent}>
                  <p className={styles.memberName}>{member.name}</p>
                  <a
                    href={`tel:${member.number}`}
                    className={styles.memberNumber}
                    aria-label={`Call ${member.name}`}
                  >
                    📱 {member.number}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Contact;
