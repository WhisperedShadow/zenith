import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { eventCollect } from "../../Components/eventCollector";
import styles from "./Event.module.css";

const Event = () => {
  const { id } = useParams();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    eventCollect(id).then((data) => {
      setEvents(data);
      setLoading(false);
      console.log(data);
      
      
    });
  }, [id]);
  

  if (loading) {
    return (
      <div className={styles.loading}>
        <img src="/loading/loading.gif" alt="" className={styles.loadimg} />
      </div>
    );
  }
  return (
    <section>
      <h1 className={styles.event}>Event : {id}</h1>
      <div className={styles.con} dangerouslySetInnerHTML={{ __html: events.content }}></div>
      <p className={styles.apply}>
        <a href={events.form}>Register Now</a>
      </p>
    </section>
  );
};

export default Event;
