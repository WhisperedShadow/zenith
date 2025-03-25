import styles from "./Home.module.css";
import EventCountdown from './Eventcountdown';

const Home = () => {
  return (
    <>
      <section className={styles.heroCon}>
        <img src="/hero/worstlogo.png" alt="logo" className={styles.log} />
        <img src="/hero/samuraipng.png" alt="" className={styles.hero}/>
        <img src="/hero/petal.gif" alt="" className={styles.petal} />
      </section>
      
      <section className={styles.about}>
        <div className={styles.aboutCon}>
          <h3 className={styles.heading}>WELCOME TO <br/>ZENITH'25</h3>
          <h2>A National Level Technical Symposium</h2>
          <br/>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit omnis eum soluta eius nulla tempore fugit! Excepturi explicabo nesciunt corporis voluptas molestias facilis possimus? Temporibus veniam mollitia voluptate culpa doloribus explicabo, blanditiis, veritatis praesentium quisquam eligendi illum unde voluptatibus est reprehenderit quia inventore asperiores necessitatibus eaque suscipit minus minima! Eligendi architecto voluptatum mollitia numquam sint nemo reprehenderit necessitatibus! Numquam, natus! Magni, in reiciendis, consectetur incidunt nulla exercitationem soluta voluptatum sint repellat, eum similique temporibus hic dolorem eos inventore eius eligendi? Nesciunt ipsam magni assumenda obcaecati, quas ex amet ullam corrupti natus non suscipit omnis delectus nisi voluptates eius accusantium aperiam?</p> 
          <br/> 
          <button className={styles.regbtn}><a href="https://docs.google.com/forms/d/e/1FAIpQLSemfqZ-VTVttNEUT7LpF8ncHBKD_FCn1Bthf11tjUqUhZfGlg/viewform?usp=header">Register now</a></button>      
        </div>
        <div className={styles.logocon}>
          <img src="/logo/nklogo.png" alt=""/>
        </div>
      </section>
      
      <section>
        <div className={styles.eventtimer}>
          <EventCountdown />
        </div>
      </section>
    </>
  );
};

export default Home;