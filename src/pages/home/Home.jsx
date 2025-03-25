import styles from "./Home.module.css";

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
        <h3 className={styles.heading}>WELCOME TO <br/>
        
        ZENITH'25</h3>
        <h2>
        A National Level Technical Symposium</h2>
        <br/>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt iste ab, dolorem autem doloremque ullam vitae quos quisquam quis porro? Provident mollitia vitae deleniti inventore modi dignissimos! Voluptatum, cumque nulla rerum odit error quidem eum tenetur nobis id, nemo magni fugiat perferendis excepturi mollitia soluta reiciendis natus rem, explicabo quia recusandae quisquam alias impedit pariatur? Voluptate aliquid fugiat quae amet modi incidunt perspiciatis dolorem, eaque aliquam voluptas cum, assumenda, quisquam excepturi obcaecati corrupti asperiores? Ab, perferendis culpa, voluptate dolores vel temporibus officiis in quia autem adipisci mollitia ratione, dolorum non nisi! Nobis vitae optio ducimus ullam at nulla pariatur repellendus non aperiam fugit. Cupiditate quasi voluptates id culpa tenetur deserunt quod fuga earum, odit officia alias nemo laboriosam impedit voluptatem est ducimus libero, ipsa et suscipit mollitia, modi quo totam provident. Quod placeat sit veritatis perferendis laudantium ad, explicabo provident consequatur quia in modi! Perferendis nostrum praesentium rerum sit odio iste magnam quo, 
accusantium exercitationem culpa. In expedita iure, consequuntur suscipit similique, atque recusandae officia nam sequi dicta porro ullam nesciunt accusamus. Dolor praesentium, temporibus placeat mollitia illum illo eius ex aliquid autem incidunt odit ullam laborum labore veniam. Nesciunt modi, sed veritatis consequatur maiores soluta et excepturi corrupti nobis reprehenderit nam ab aperiam, distinctio magni non enim officia, itaque accusantium quas vel totam? Id, quam laudantium atque officiis sapiente beatae quo perspiciatis cupiditate repellat saepe quisquam nisi, harum maxime quaerat vero sed nulla dolor, quasi excepturi repellendus suscipit incidunt asperiores dolorum illo? Natus, harum non in minima voluptatem pariatur.</p> <br/> <button className={styles.regbtn}>  Register now</button>      </div>
      <div className={styles.logocon}>
       <img src="/logo/nklogo.png" alt=""/></div>
      </section>
      <section></section>
    </>
  );
};

export default Home;
