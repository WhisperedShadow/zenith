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
          <p>Jeppiaar Engineering College was one among the most emerging 
colleges in Chennai, was established in the year 2001.
The college offers thestudents in their pursuit of Academic 
Excellence enriching integral growth as well as intellectual, emotional, 
spiritual and social identity, the authenticity 
of Jeppiaar Engineering College, located in the Jeppiaar Nagar, 
Chennai.
 Jeppiaar Engineering College is a Self-financed, co-educational 
institution and affiliated to Anna University and in the short 
period it has grown into an institution that provides excellent 
technical education while keeping the overall growth and development 
of the students in mind.
Department of Computer Science and Engineering with 422 students 
are aimed to develop leadership quality and competency among the 
students. Thus we decided to conduct a National 
level technical Symposium for the benefit of the students.</p>
          <br/> 
          <button className={styles.regbtn}><a href="https://docs.google.com/forms/d/e/1FAIpQLSemfqZ-VTVttNEUT7LpF8ncHBKD_FCn1Bthf11tjUqUhZfGlg/viewform?usp=header">Register now</a></button>  

        </div>
        <div className={styles.logocon}>
          <img src="/logo/nklogo.png" alt=""/>
        </div>
         
        
      </section>
      
      <section>
      <img src="/hero/petal.gif" alt="" className={styles.petal2} />

        <div className={styles.eventtimer}>
          <EventCountdown />
          
        </div>
        
      </section>
    </>
  );
};

export default Home;