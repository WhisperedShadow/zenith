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
    return <p>Loading...</p>;
  }

  if (!type) {
    return <p>Invalid event type.</p>;
  }

  return (
    <>
      <section>
        <h1>{type} Events</h1>

        {events.map((event) => (
          <div className={styles.card} key={event.id}>
            <img src={event.image} alt="" />
            <div className={styles.con}>
              <h1>{event.name}</h1>
              <p>{event.description}</p>
              <a href={`event/${event.name}`}>Click here </a>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Events;
