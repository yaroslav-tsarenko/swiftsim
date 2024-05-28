import styles from "./Background6.module.css";

const Background6 = ({ className = "" }) => {
  return (
    <section className={[styles.background, className].join(" ")}>
      <div className={styles.heading2ScanAQrCodeWrapper}>
        <h1 className={styles.heading2}>Scan a QR code</h1>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.link1b3640b9636f43449ad4731Parent}>
          <img
            className={styles.link1b3640b9636f43449ad4731}
            alt=""
            src="/link--1b3640b9636f43449ad47313dffc0b3c-540xpng@2x.png"
          />
          <div className={styles.goToSettingsCellularWrapper}>
            <div
              className={styles.goToSettings}
            >{`1. Go to Settings > Cellular.`}</div>
          </div>
        </div>
        <div className={styles.link6b573894e70b42a49c10c6cParent}>
          <img
            className={styles.link6b573894e70b42a49c10c6c}
            alt=""
            src="/link--6b573894e70b42a49c10c6cb1381388d-540xpng@2x.png"
          />
          <div className={styles.tapAddCellularPlanWrapper}>
            <div className={styles.tapAddCellular}>
              2. Tap Add Cellular Plan
            </div>
          </div>
        </div>
        <div className={styles.link3aeb567fa1544a9786d85e7Parent}>
          <img
            className={styles.link3aeb567fa1544a9786d85e7}
            alt=""
            src="/link--3aeb567fa1544a9786d85e7e12610370-540xpng@2x.png"
          />
          <div className={styles.useYourIphoneToScanThePuWrapper}>
            <div className={styles.useYourIphone}>
              3. Use your iPhone to scan the purchased eSIM QR code.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Background6.propTypes = {
  className: PropTypes.string,
};

export default Background6;
