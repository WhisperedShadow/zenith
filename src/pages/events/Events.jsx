import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { eventCollector } from "../../Components/eventCollector";
import styles from "./Events.module.css";

const Events = () => {
  const { event } = useParams();
  const [type, setType] = useState();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (event === "tech" || event === "nonetech") {
      setType(event === "tech" ? "Tech" : "Non-Tech");
    } else {
      setType(null);
    }
  }, [event]);

  useEffect(() => {
    if (type) {
      setLoading(true);
      eventCollector(type).then((data) => {
        setEvents(data);
        setLoading(false);
        console.log(data);
      });
    }
  }, [type]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.moon}></div>
        <img src="/loading/loading.gif" alt="" className={styles.loadimg} />
      </div>
    );
  }

  if (!type) {
    return <p>Invalid event type.</p>;
  }

  return (
    <>
      <section>
        <h1>{type} Events</h1>
        <p className={styles.intro}>
          Explore a diverse range of exciting events, from tech innovations to
          creative non-tech experiences. Whether you're here to learn, compete,
          or connect, there's something for everyone! Stay tuned, participate,
          and make unforgettable memories.{" "}
        </p>
      <div className={styles.allcards}>
        {events.map((event) => (
          <div className={styles.card} key={event.id}>
            <img src={event.image} alt="" />
            <div className={styles.con}>
              <h1>{event.name}</h1>
              <p>{event.description}</p>
              <a href={`event/${event.name}`}>Show more </a>
            </div>
          </div>
        
        ))}
        </div>
      </section>
    </>
  );
};

export default Events;
