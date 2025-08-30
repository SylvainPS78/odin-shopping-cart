import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../styles/PageTransition.module.scss";

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setIsAnimating(false);
      document.body.style.overflow = "auto";
    }, 500); // Animation duration

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, [location.pathname]);

  return (
    <div
      className={`${styles.pageTransition} ${isAnimating ? styles.animating : ""}`}
    >
      {children}
    </div>
  );
};

export default PageTransition;
