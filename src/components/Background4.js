import styles from "./Background4.module.css";

const Background4 = ({ className = "" }) => {
  return (
    <div className={[styles.background, className].join(" ")}>
      <div className={styles.heading3CompatibleDevicesWrapper}>
        <h2 className={styles.heading3}>
          Compatible Devices for USA Travel eSIM
        </h2>
      </div>
      <div className={styles.youMayCheckTheListOfCompWrapper}>
        <p className={styles.youMayCheck}>
          You May Check the List of Compatible Devices for eSIM for Travel to
          USA
        </p>
      </div>
      <div className={styles.horizontalborder}>
        <div className={styles.appleWrapper}>
          <b className={styles.apple}>Apple</b>
        </div>
        <img className={styles.borderIcon} alt="" src="/border.svg" />
      </div>
      <div className={styles.horizontalborder1}>
        <div className={styles.androidWrapper}>
          <b className={styles.android}>Android</b>
        </div>
        <img className={styles.borderIcon1} alt="" src="/border.svg" />
      </div>
    </div>
  );
};

Background4.propTypes = {
  className: PropTypes.string,
};

export default Background4;
