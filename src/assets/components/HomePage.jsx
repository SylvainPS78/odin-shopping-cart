{
  /* import logoMobile from "../img/Logo_mobile.png"; */
}
import styles from "../styles/HomePage.module.scss";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className={styles.main} aria-label="Site main content">
      <div className={styles.mainLogo}></div>
      <Link to="/products" className={styles.mainButton} id="button-shop-now">
        SHOP NOW
      </Link>
    </main>
  );
};

export default HomePage;
