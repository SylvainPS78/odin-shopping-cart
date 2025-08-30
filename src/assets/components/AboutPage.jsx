import styles from "../styles/AboutPage.module.scss";

const currentYear = new Date().getFullYear();

const AboutPage = () => {
  return (
    <main className={styles.main} aria-label="About page main content">
      <p className={styles.text}>
        Data from{" "}
        <a
          className={styles.link}
          href="https://fakestoreapi.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Fake Store API website"
        >
          Fake Store API
        </a>
      </p>
      <p>
        &copy; <time dateTime={currentYear.toString()}>{currentYear}</time>{" "}
        Created by{" "}
        <a
          className={styles.link}
          href="https://github.com/SylvainPS78"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Sylvain Web's GitHub profile"
        >
          Sylvain Web
        </a>
      </p>
    </main>
  );
};

export default AboutPage;
