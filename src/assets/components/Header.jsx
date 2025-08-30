import logoHeader from "../img/Logo_header.png";
import styles from "../styles/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header} aria-label="Site Header">
      {" "}
      {/* define role */}{" "}
      <img
        src={logoHeader}
        alt="Chic & Shine logo"
        width={333}
        height={71}
        className={styles.logo}
        loading="lazy"
      ></img>
      <div className={styles.buttonsContainer}>
        <button className={styles.button} id="button-home">
          HOME
        </button>
        <button className={styles.button} id="button-product">
          PRODUCT
        </button>
        <button className={styles.button} id="button-about">
          ABOUT
        </button>
        <button className={styles.button} id="button-cart">
          CART
        </button>
      </div>
    </header>
  );
};

export default Header;
