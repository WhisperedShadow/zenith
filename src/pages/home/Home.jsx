import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <section className={styles.heroCon}>
        <img src="/hero/worstlogo.png" alt="logo" className={styles.log} />
        <img src="/hero/samuraipng.png" alt="" className={styles.hero}/>
        <img src="/hero/petal.gif" alt="" className={styles.petal} />
      </section>
      <section className={styles.about}></section>
      <section></section>
    </>
  );
};

export default Home;
