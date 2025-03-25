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
      setEvents(data[0]);
      setLoading(false);
      console.log(data);
      document.getElementById("con").innerHTML = data[0].content;
    });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <section>
      <h1>Event {id}</h1>
      <div id="con" className={styles.con}></div>
      <a href={events.form}>Apply here</a>
    </section>
  );
};

export default Event;
