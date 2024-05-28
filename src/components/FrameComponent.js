import Footer from "./Footer";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <footer className={[styles.footerParent, className].join(" ")}>
      <Footer />
      <button className={styles.background}>
        <img className={styles.svgIcon} alt="" src="/svg-11.svg" />
        <b className={styles.rewards}>Rewards</b>
      </button>
      <img className={styles.backgroundIcon} alt="" src="/background-1.svg" />
    </footer>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
