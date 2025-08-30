{
  /* import logoMobile from "../img/Logo_mobile.png"; */
}
import styles from "../styles/HomePage.module.scss";

const HomePage = () => {
  return (
    <main className={styles.main} aria-label="Site main content">
      <div className={styles.mainLogo}></div>
      <button className={styles.mainButton} id="button-shop-now">
        SHOP NOW
      </button>
    </main>
  );
};

export default HomePage;
