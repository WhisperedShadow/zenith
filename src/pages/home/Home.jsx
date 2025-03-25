import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <section className={styles.heroCon}>
        <img src="/hero/worstlogo.png" alt="logo" className={styles.log} />
        <img src="/hero/samuraipng.png" alt="" className={styles.hero}/>
      </section>
      <section className={styles.about}></section>
      <section></section>
    </>
  );
};

export default Home;
